# MindMapAI ![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-yellowgreen)

## Project Description
MindMapAI is an innovative web application that leverages AI to assist users in creating and organizing their thoughts visually through mind maps. By integrating real-time collaboration and AI-generated suggestions, it enhances brainstorming sessions for teams and individuals alike.

## Features
- 🧠 **AI-assisted mind mapping**: Users can input topics and the AI generates a structured mind map with related concepts.
- 🤝 **Collaborative brainstorming**: Multiple users can work on the same mind map in real-time, with chat functionality for discussions.
- 📤 **Export options**: Users can export their mind maps in various formats (PDF, image, text) for presentations or sharing.

## Tech Stack
### Frontend
- 🌐 **Next.js**: A React framework for building server-side rendered applications.

### Backend
- ⚡ **FastAPI**: A modern web framework for building APIs with Python 3.6+ based on standard Python type hints.
- 🤖 **LangChain**: A framework for developing applications powered by language models.

### Database
- 🗄️ **PostgreSQL**: A powerful, open-source object-relational database system.

### AI Integration
- 🧠 **OpenAI**: Leveraging AI capabilities for generating mind maps and suggestions.

## Installation
To set up the project locally, follow these steps:

- Clone the repository
bash
git clone https://github.com/kishan-kumar-codes/mindmapai
- Navigate to the project directory
bash
cd mindmapai
- Install the backend dependencies
bash
cd backend
pip install -r requirements.txt
- Install the frontend dependencies
bash
cd ../frontend
npm install
- Set up the PostgreSQL database and update the configuration in the backend settings.

## Usage
1. Start the backend server
bash
cd backend
uvicorn main:app --reload
2. Start the frontend development server
bash
cd frontend
npm run dev
3. Open your browser and navigate to `http://localhost:3000` to start using MindMapAI.

## API Documentation
For detailed API documentation, please refer to the [API Docs](https://github.com/kishan-kumar-codes/mindmapai/docs/api.md).

## Testing
To run the tests for the backend, execute the following command:
bash
cd backend
pytest
## Deployment
To deploy the application, follow these steps:

- Build the frontend for production
bash
cd frontend
npm run build
- Deploy the backend using your preferred cloud service (e.g., AWS, Heroku).

## Contributing
We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/kishan-kumar-codes/mindmapai/LICENSE) file for details.

## Acknowledgments
- Special thanks to the contributors and the open-source community for their invaluable support and resources.