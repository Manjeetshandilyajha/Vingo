import axios from "axios";
import { useEffect } from "react";
// import { serverUrl } from "../App"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentAddress, setCurrentCity, setCurrentState } from "../redux/userSlice";
import { setAddress, setLocation } from "../redux/mapSlice";

const useGetCity = () => {
  const dispatch = useDispatch()
  const { userData } = useSelector(state => state.user)
  const apiKey = import.meta.env.VITE_GEOAPIKEY
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      dispatch(setLocation({lat:latitude,lon:longitude}))
      const result = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`)
      console.log(result.data)
      // dispatch(setCurrentCity(result?.data?.results[0].city))
      dispatch(setCurrentState(result?.data?.results[0].state))
      dispatch(setCurrentAddress(result?.data?.results[0].address_line2 || result?.data?.results[0].address_line1))

      // console.log(result.data.results[0]);
      const location = result.data?.results?.[0];

      const city =
        location?.city ||
        location?.town ||
        location?.village ||
        location?.suburb ||
        location?.county ||
        location?.state ||
        "Unknown Location";

      dispatch(setCurrentCity(city));

      // console.log(result.data.results[0])
      dispatch(setAddress(result?.data?.results[0].address_line2))

    })
  }, [userData])
}

export default useGetCity








// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setCity } from "../redux/userSlice";

// const useGetCity = () => {
//   const dispatch = useDispatch();
//   const apiKey = import.meta.env.VITE_GEOAPIKEY;

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       console.log("Geolocation is not supported by this browser.");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         try {
//           const { latitude, longitude } = position.coords;

//           const { data } = await axios.get(
//             `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apiKey}`
//           );

// const location = data?.results?.[0];

// const city =
//   location?.city ||
//   location?.town ||
//   location?.village ||
//   location?.suburb ||
//   location?.county ||
//   location?.state ||
//   "Unknown Location";

// dispatch(setCity(city));

//           // console.log("Location:", city);
//           // console.log("Full Response:", location);
//         } catch (error) {
//           console.error("Geoapify Error:", error);
//         }
//       },
//       (error) => {
//         console.error("Geolocation Error:", error.message);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 0,
//       }
//     );
//   }, [dispatch, apiKey]);
// };

// export default useGetCity;