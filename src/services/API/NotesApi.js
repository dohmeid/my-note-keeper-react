import axios from 'axios';

//this function is used to fetch all the notes from the server
export const fetchNotes = async () => {
    try {
        const response = await axios.get("http://localhost:5000/notes", { crossdomain: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching the notes data: ', error);
    }
};

//this function is used to add a new note to the database using the server
export const addNote = async (newNote) => {
    try {
        await axios.post("http://localhost:5000/notes", newNote, { crossdomain: true });
        console.log('done adding the new note');
    } catch (error) {
        console.error('Error adding the new note: ', error);
    }
};

//this function is used to delete a note from the database using the server
export const deleteNote = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/notes/${id}`, { crossdomain: true })
        console.log('done deleting the note');
    } catch (error) {
        console.error('Error deleting the note: ', error);
    }
};

//this function is used to update a note from the database using the server
export const updateNote = async (id,newNote) => {
    try {
        await axios.put(`http://localhost:5000/notes/${id}`, newNote, { crossdomain: true })
        console.log('done updating the note');
    } catch (error) {
        console.error('Error updating the note: ', error);
    }
};