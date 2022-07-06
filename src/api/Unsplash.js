import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID MNosd9o43PqFvEr97WvDUljBwx1n6ycVvPkuotXZIzw",
      }
})

// axios
    //   .get("https://api.unsplash.com/search/photos", {
    //     headers: {
    //       Authorization:
    //         "Client-ID MNosd9o43PqFvEr97WvDUljBwx1n6ycVvPkuotXZIzw",
    //     },
    //     params: {
    //       query: e,
    //     },
    //   })
    //   .then((res) => {
    //     console.log("res test", res);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
    // <Card color="blue" image={data.urls.full} key={data.id} />
    /* <Card
image={data.urls.small}
header={data.user.name}
description= {data.description}
key={data.id}
/> */
 