#!/usr/bin/env python3

import connexion

from swagger_server import encoder, db
from flask_cors import CORS


def main():
    app = connexion.App(__name__, specification_dir='./swagger/', server_args={'static_url_path': '/', 'static_folder': 'static/'})
    CORS(app.app)
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'Swagger Petstore - OpenAPI 3.0'}, pythonic_params=True)
    db.setup()
    app.run(port=8080)


if __name__ == '__main__':
    main()
