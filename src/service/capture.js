import axios from "axios";

export const capturePage = (data) => {
  axios
    .post("http://localhost:3001/capture", data)
    .then((response) => {
      console.log(response);
      var data = new Blob([response.data], { type: ".png" });
      var csvURL = window.URL.createObjectURL(data);
      var tempLink = document.createElement("a");
      tempLink.href = csvURL;
      tempLink.setAttribute("download", "filename.png");
      tempLink.click();
    })
    .catch((err) => {
      console.log(err);
    });
};
