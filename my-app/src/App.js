// import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PetsIcon from '@mui/icons-material/Pets';
import { purple } from '@mui/material/colors';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import {ApiClient} from './ApiClient';
// import {Address} from './model/Address';
// import {ApiResponse} from './model/ApiResponse';
import {Category} from './model/Category';
// import {Customer} from './model/Customer';
// import {Order} from './model/Order';
import {Pet} from './model/Pet';
import {Tag} from './model/Tag';
// import {User} from './model/User';
import {PetApi} from './api/PetApi';
// import {StoreApi} from './api/StoreApi';
// import {UserApi} from './api/UserApi';

function f() {
	// var SwaggerPetstoreOpenApi30 = require('swagger_petstore___open_api_30');
	var defaultClient = ApiClient.instance;

	// Configure OAuth2 access token for authorization: petstore_auth
	var petstore_auth = defaultClient.authentications['petstore_auth'];
	petstore_auth.accessToken = "YOUR ACCESS TOKEN"
	// var auth = defaultClient.authentications['api_key'];
	// auth.accessToken = "test_key";

	const api = new PetApi()
	const name = "doggie"; // {String} 
	const photoUrls = ["https://helios-i.mashable.com/imagery/articles/00apgKgIAO4EnFfjOgCApRe/hero-image.fill.size_1248x702.v1619086604.jpg"]; // {[String]} 
	// const id = 789; // {Number} 
	var category = new Category(); // {Category} 
	Category.constructFromObject({'name': 'Dog'}, category)

	var cute = new Tag();
	Tag.constructFromObject({'name': 'cute'}, cute)
	var funny = new Tag();
	Tag.constructFromObject({'name': 'funny'}, funny)
	const tags = [cute, funny]; // {[Tag]} 

	const status = "available"; // {String} 
	var body = new Pet(); // {Pet} Create a new pet in the store
	const p = {
		// id: id, 
		name: name, category: category, photoUrls: photoUrls, tags: tags, status: status
	}
	Pet.constructFromObject(p, body)

	var callback = function(error, data, response) {
		if (error) {
			console.error(error);
		} else {
			console.log('API called successfully. Returned data: ' + data);
		}
	};
	// api.addPet(body, id, name, category, photoUrls, tags, status, callback);
	api.addPet(body, callback);
}

function App() {
  return (
    <div className="App">
			<header className="App-header">	
        {/* 
			<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
				<div><PetsIcon sx={{ color: purple[500] }}/></div>
				<Box component="form" onSubmit={f}>
				<TextField
              margin="normal"
              required
							fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
					<InputLabel id="select-label">Category</InputLabel>
					<Select
              id="category"
              label="select-label"
							fullWidth
							defaultValue={"Dog"}
              name="category">
								<MenuItem value={"Cat"}>Cat</MenuItem>
								<MenuItem value={"Dog"}>Dog</MenuItem>
					</Select>
					<div style={{padding:"20px"}}></div>
					<Button variant="contained" onClick={f}>Add</Button>
					</Box>
      </header>
    </div>
  );
}

export default App;
