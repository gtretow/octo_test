import axios from "axios";

let local = "http://localhost:5000/cameraData/";
let server: string = "https://62e476463c89b95396db699d.mockapi.io/camera/";


export async function getCameraData() {
  let response;

  try {
    response = await axios.get(server);
  } catch (error) {
    return console.log("error trying to update data", error);
  }
  return response.data;
}

export async function createNewCameraEntry(data: {}) {
  try {
    await axios.post(server, data);
  } catch (error) {
    return console.log("error trying to create data", error);
  }
}

export async function deleteCameraEntry(id: string) {
  console.log('id', id)
  try {
    await axios.delete(`${server}${id}`);
  } catch (error) {
    return console.log("error trying to delete data", error);
  }
}
