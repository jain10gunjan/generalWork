import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import ReferralButton from "./ReferralButton ";

const Demo = () => {
  const [userData, setUserData] = useState(null);
  const cardRef = useRef(null); // Reference for the card

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token"); // Get the token from localStorage

      if (!token) {
        window.location.href = "/login"; // Redirect to login if no token
        return;
      }

      try {
        // Fetch user data using the token
        const response = await axios.get(
          "https://general-work.vercel.app/api/users/getRegisterUser",
          {
            headers: { Authorization: `Bearer ${token}` }, // Add the token in the Authorization header
          }
        );

        if (response.data.success) {
          setUserData(response.data.data); // Set user data
        } else {
          console.error(response.data.message); // Log any error message
        }
      } catch (error) {
        console.error("Error fetching user data", error); // Catch any fetch errors
      }
    };

    fetchUserData();
  }, []);

  const handleDownload = () => {
    if (cardRef.current) {
      // Set a white background before generating the image
      cardRef.current.style.backgroundColor = "white";
      cardRef.current.style.fontFamily = "khand";

      htmlToImage
        .toPng(cardRef.current)
        .then((dataUrl) => {
          saveAs(dataUrl, "user-card.png");
          alert("Your card has been downloaded.");
        })
        .catch((error) => {
          console.error("Error generating image", error);
        })
        .finally(() => {
          // Reset background color after the download
          cardRef.current.style.backgroundColor = ""; // Reset to original
          cardRef.current.style.fontFamily = "";
        });
    }
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <>
      <div ref={cardRef}>
        <img src={assets.logoUper} alt="" />
        <p className="flex items-center justify-center text-2xl md:text-6xl font-extrabold my-css mt-2">
          सदस्यता कार्ड 2024
        </p>
        <div className="flex justify-around mt-4">
          <div>
            <p>
              नाम :- <b>{userData.name}</b>
            </p>
            <p>
              राज्य का नाम :- <b>{userData.statename}</b>
            </p>
            <p>
              लोकसभा :- <b>{userData.loksabhaconstituencyname}</b>
            </p>
            <p>
              जिला :- <b>{userData.districtname}</b>
            </p>
            <p className="text-lg">
              ID No. :- <b>{userData.randomCode}</b>
            </p>{" "}
            {/* Displaying the random code */}
          </div>
          <div className="">
            <img
              src={`https://general-work.vercel.app/image/${userData.photo}`}
              className="w-[100px] h-[100px] -mt-0 rounded-full border-4 border-yellow-200 mb-2 "
              alt="img"
            />
          </div>
        </div>
        <img src={assets.footer} alt="img" />
      </div>
      <div className="flex justify-center items-center space-x-4 p-4 bg-gray-100">
        <button
          className="footer-box bg-red-500 text-white rounded-lg p-2 hover:bg-blue-700 transition duration-200"
          onClick={handleDownload}
        >
          <i className="fa-solid fa-download"></i>
        </button>
        <button className="footer-box bg-red-500 text-white rounded-lg p-2 hover:bg-green-700 transition duration-200">
          <i className="fa-solid fa-share"></i>
        </button>
      </div>

      <div className="mt-6">
        <ReferralButton />
      </div>
    </>
  );
};

export default Demo;
