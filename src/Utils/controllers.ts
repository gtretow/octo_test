import axios from "axios";

export async function getCameraData() {
  let response;
  try {
    response = await axios.get(`http://localhost:5000/cameraData`);
  } catch (error) {
    return console.log("error trying to update data", error);
  }
  return response.data;
}

export async function createNewCameraEntry(data: {}) {
  try {
    await axios.post(`http://localhost:5000/cameraData`, data);
  } catch (error) {
    return console.log("error trying to create data", error);
  }
}

export async function deleteCameraEntry(id: string) {
  try {
    await axios.delete(`http://localhost:5000/cameraData/${id}`);
  } catch (error) {
    return console.log("error trying to delete data", error);
  }
}
