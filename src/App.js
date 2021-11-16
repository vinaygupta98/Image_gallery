import React, {
  useState,
  useEffect,
} from "react";
import "./App.css";

import Cards from "./components/cards";
import Modal from "./components/modal";
const App = () => {
  const [data, setData] =
    useState([]);
  const [search, setSearch] =
    useState("");
  const [
    loading,
    setLoading,
  ] = useState(false);
  const [error, setError] =
    useState(false);

  const [show, setShow] =
    useState(false);
  const [
    singlePhoto,
    setSinglePhoto,
  ] = useState(null);
  const AccessToken =
    "GMjOkPCQ4qWUOHMRw3aB39A4o7Hi3utGxPNd5soiees";
  useEffect(() => {
    const getPhotos =
      async () => {
        try {
          setLoading(true);
          const response =
            await fetch(
              `https://api.unsplash.com/photos/?client_id=${AccessToken}`
            );
          const data =
            await response.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      };
    getPhotos();
  }, []);
  const SearchPhotos =
    async () => {
      try {
        setLoading(true);
        const response =
          await fetch(
            `https://api.unsplash.com/search/photos?client_id=${AccessToken}&query=${search}`
          );
        const data =
          await response.json();
        setData(data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
  return (
    <div className='App'>
      <h1 className='header'>
        Image Gallery{" "}
      </h1>
      <div className='search'>
        <input
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />
        <button
          className='btn btn-primary'
          onClick={() =>
            SearchPhotos()
          }
        >
          Get Photos
        </button>
      </div>

      {error && (
        <div
          className='alert alert-danger'
          role='alert'
        >
          'Some Error Occur'
        </div>
      )}
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent:
              "center",
            marginTop:
              "2.5rem",
          }}
        >
          <h5>Loading</h5>
        </div>
      ) : data.length > 0 ? (
        <div className='container'>
          <Cards
            data={data}
            setSinglePhoto={
              setSinglePhoto
            }
            setShow={setShow}
          />
        </div>
      ) : (
        <div className='no_image_container'>
          <h5>
            No Image Found
          </h5>
        </div>
      )}
      <Modal
        show={show}
        setShow={setShow}
        data={singlePhoto}
      />
      <footer className='footer'>
        <h3>
          {" "}
          Designed by {"  "}
          <a href='https://github.com/vinaygupta98'>
            Vinay Gupta
          </a>
        </h3>
      </footer>
    </div>
  );
};

export default App;
