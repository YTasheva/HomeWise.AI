<h1 align="center">HomeWise Voice Assistant</h1>
  <br />
  <a href="https://github.com/Peter-Palacios">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg?style=for-the-badge" alt="">
  </a>
  <a href="https://github.com/Peter-Palacios/HomeWise/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/Peter-Palacios/HomeWise.svg?style=for-the-badge" alt="">
  </a>
  <a href="https://github.com/Peter-Palacios/HomeWise/issues">
      <img src="https://img.shields.io/github/issues/Peter-Palacios/HomeWise.svg?style=for-the-badge" alt="">
  </a>
  <a href="https://github.com/Peter-Palacios/HomeWise/network/members">
      <img src="https://img.shields.io/github/forks/Peter-Palacios/HomeWise.svg?style=for-the-badge" alt="">
  </a>


HomeWise is a voice-driven home assistant that leverages AI technologies to deliver personalized, relevant information and guidance to users. HomeWise aims to curate data for each user and enhance daily living, such as personal schedules, family schedules, reminders, and preferred recipes. The application uses Voice Retrieval-Augmented Generation (RAG), Azure AI Search, and the GPT-4o Realtime API for intelligent audio assistance.

## Table of contents

- [Features](#features)
- [Screenshot](#screenshot)
- [VoiceRAG Diagram](#voicerag-diagram)
- [Links](#links)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

## Features

- **Voice Interface**: Interact with HomeWise using voice capture via the browser's microphone and it's processed via thhe Azure OpenAI GPT-4o Realtime API.
- **VoiceRAG (Retrieval-Augmented Generation)**: Enhanced data retrieval via the Azure AI Search to generation for accurate and relevant responses.
- **Audio Autput**: The response is retrieved from the GPT-4o Realtime API and played back to the user via the browser's speakers.
- **Search Results**: The search results that were used to generate the response are displayed for the user to view and interact with.
- **Personalized Recommendations**: Tailored suggestions based on user preferences and past interactions.
- **Privacy and Security**: Robust measures to ensure user data is protected and private.
- **Cross-Platform Compatibility**: Accessible on various devices and platforms for convenience.
- **Real-Time Updates**: Continuously updated data and information for accurate and relevant responses.

## Screenshot

![](https://github.com/Peter-Palacios/HomeWise/blob)

## VoiceRAG Diagram

![VoiceRAG Diagram](https://github.com/Peter-Palacios/HomeWise/blob/main/client/public/VoiceRAG.png)

## Links

- [Deployed Application](https://Peter-Palacios.github.io/HomeWise/)
- [GitHub Repo](https://github.com/Peter-Palacios/HomeWise)
- [HomeWise Presentation Slides](https://docs.google.com/presentation/d/.../edit?usp=sharing)

## Technologies

- **Azure OpenAI GPT-4o Realtime API**: Real-time speech and audio processing for voice interaction. API documentation is available to provide detailed information on      endpoints, request/response formats, and usage examples. Refer to the [Realtime API](https://learn.microsoft.com/en-us/azure/ai-services/openai/realtime-audio-quickstart?pivots=ai-foundry-portal) for comprehensive API documentation.
- **Azure AI Search**: Advanced search capabilities for data retrieval and generation.
- **Azure Container Apps**: Containerized applications for deployment and scaling.
- **Azure Blob Storage**: Cloud storage for data and file storage.
- **Azure Monitor**: Monitoring and logging for application performance.
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **React.js**: JavaScript library for building user interfaces.
- **MongoDB**: NoSQL database for data storage.
- **Azure Developer CLI**: Command-line interface for Azure services.
- **Tailwind CSS**: Front-end development languages for web design.
- **HTML/CSS**: Markup and styling languages for web development.
- **JavaScript**: Programming language for web development.
- **Python 3.0**: Programming language for back-end development.
- **Wisper**: A Python library for voice recognition and speech synthesis.
- **RAG (Retrieval-Augmented Generation)**: Enhanced data retrieval and generation for accurate and relevant responses.
- **VS Code Dev Containers**: Development containers for consistent development environments.


## Getting Started

To get started with HomeWise, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/HomeWise.git
    ```
2. Navigate to the project directory:
    ```bash
    cd HomeWise
    ```
3. Install the required dependencies:
    ```bash
    npm install 
    ```
    pip install -r requirements.txt```

5. Set Up Azure Credentials:
    - Create a new Azure account or sign in to your existing account and set up the necessary services.
    - Store your credentials in a `.env` file and load them into your application.

6. Run the Assistant
    ```bash
    python main.py
    ```

## Usage

Once the application is running, you can interact with HomeWise using voice commands. For example:
- "What's on my schedule today?"
- "Remind me to pick up groceries at 5 PM."
- "Show me my family's schedule for the week."
- "Suggest a recipe for dinner."


## Contributing

We welcome contributions to HomeWise! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add your commit message"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Create a pull request.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Authors

- GitHub - [Peter Palacios](https://github.com/Peter-Palacios) - Back-End | [Yuliya Tasheva](https://github.com/YTasheva) - Front-End
- For any questions, suggestions, or issues, please contact our team at 

> [HomeWise.com](#) &nbsp;&middot;&nbsp;
> Email [support@homewise.com](#) &nbsp;&middot;&nbsp;

**Thank you for using and contributing to the HomeWise website! Your support helps us continually improve and deliver the best voice assistance experience.**
