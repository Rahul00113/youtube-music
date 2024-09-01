# youtube-music


To get started with this project, follow the steps below:

Clone the Repository:

bash

Install Dependencies: Install the required dependencies using npm or yarn:

bash
Copy code
npm install
# or
yarn install
Create Environment Variables: Create a .env.local file in the root directory of your project and add the following variables:


Run the Development Server:

bash
Copy code
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser to see the application.

Upload Audio Files:

Click the upload button to open the modal.
Select an audio file from your local machine to upload it to localstorage.
The uploaded audio file will be added to the list/grid and displayed with its details.
Components
The project is structured around the following main components:

UploadForm: A form component that allows users to upload audio files.
AudioPlayer: A component for playing audio files with controls.
AudioList: A component that displays audio files in a list format.
AudioGrid: A component that displays audio files in a grid format.
ToggleViewButton: A button component to switch between list and grid views.
Features
Responsive Layout: Switch between list and grid views for displaying audio files.
Playback Control: Integrated audio player with next/previous track controls.
Dynamic State Management: Audio files are dynamically updated upon upload.