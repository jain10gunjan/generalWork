import React, { useState } from "react";
import "./Page.css";
import { assets } from "../assets/assets";
import axios from "axios";
import QR from "./QR";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    father: "",
    education: "",
    job: "",
    category: "",
    statename: "",
    districtname: "",
    loksabhaconstituencyname: "",
    vidhansabhaconstituencyname: "",
    tehsilname: "",
    zilapanchayatconstituencyname: "",
    janpadpanchayatconstituencyname: "",
    municipalcorporationname: "",
    municipalityname: "",
    nagarpanchayatname: "",
    grampanchayatname: "",
    wardno: "",
    pincode: "",
    sagetan: "",
    marrid: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showQr, setShowQr] = useState(false); // State to control QR code visibility
  //const [showForm, setShowForm] = useState(true);

  const handlePayment = () => {
    // Simulate payment process here
    setShowQr(true); // Show QR code after payment confirmation
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key !== "image") {
        formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        "https://general-work.vercel.app/api/users/register",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        // Store token in localStorage
        localStorage.setItem("token", response.data.token);

        // Redirect to the demo page with user data
        window.location.href = "/demo";
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="flex justify-center items-center">
        <img
          src={assets.obc}
          className="w-30 h-56 object-cover max-w-2xl justify-center items-center img-width"
          alt="Background"
        />
      </div>
      <h1 className="flex justify-center items-center mt-8 text-3xl per-font per-col">
        <b className="per-font">ओबीसी महासभा सदस्यता फॉर्म - 2024</b>
      </h1>

      <form
        className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg  space-y-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label htmlFor="name" className="block text-gray-700">
          सदस्य का नाम * :
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="सदस्य का नाम"
          onChange={handleChange}
          value={formData.name}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="father" className="block text-gray-700">
          पिता/पति नाम * :
        </label>
        <input
          type="text"
          id="father"
          name="father"
          placeholder="पिता/पति नाम"
          onChange={handleChange}
          value={formData.father}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="marrid" className="block text-gray-700">
          विवाहित/अविवाहित * :
        </label>
        {/* <input
            type="text"
            id="marrid"
            name="marrid"
            required
            placeholder="विवाहित/अविवाहित"
            onChange={handleChange}
            value={formData.marrid}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          /> */}
        <select
          id="marrid"
          name="marrid"
          onChange={handleChange}
          value={formData.marrid}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="ha">हाँ</option>
          <option value="na">नहीं</option>
        </select>

        <label htmlFor="number" className="block text-gray-700">
          मोबाइल नंबर * :
        </label>
        <input
          type="text"
          id="number"
          name="number"
          placeholder="मोबाइल नंबर"
          onChange={handleChange}
          value={formData.number}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="education" className="block text-gray-700">
          शिक्षा (योग्यता) :
        </label>
        <input
          type="text"
          id="education"
          name="education"
          placeholder="शिक्षा (योग्यता)"
          onChange={handleChange}
          value={formData.education}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="job" className="block text-gray-700">
          नौकरी :
        </label>
        <input
          type="text"
          id="job"
          name="job"
          placeholder="नौकरी"
          onChange={handleChange}
          value={formData.job}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="category" className="block text-gray-700">
          वर्ग * :
        </label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          value={formData.category}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="ha">ओबीसी (OBC)</option>
          <option value="na">एससी (SC)</option>
          <option value="na">एसटी (ST)</option>
        </select>

        <label htmlFor="statename" className="block text-gray-700">
          प्रदेश का नाम * :
        </label>
        <select
          id="statename"
          name="statename"
          onChange={handleChange}
          value={formData.statename}
          className="block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">-- राज्य चुनें --</option>
          <option value="Andhra Pradesh">आंध्र प्रदेश</option>
          <option value="Arunachal Pradesh">अरुणाचल प्रदेश</option>
          <option value="Assam">असम</option>
          <option value="Bihar">बिहार</option>
          <option value="Chhattisgarh">छत्तीसगढ़</option>
          <option value="Goa">गोवा</option>
          <option value="Gujarat">गुजरात</option>
          <option value="Haryana">हरियाणा</option>
          <option value="Himachal Pradesh">हिमाचल प्रदेश</option>
          <option value="Jharkhand">झारखंड</option>
          <option value="Karnataka">कर्नाटक</option>
          <option value="Kerala">केरल</option>
          <option value="Madhya Pradesh">मध्य प्रदेश</option>
          <option value="Maharashtra">महाराष्ट्र</option>
          <option value="Manipur">मणिपुर</option>
          <option value="Meghalaya">मेघालय</option>
          <option value="Mizoram">मिजोरम</option>
          <option value="Nagaland">नागालैंड</option>
          <option value="Odisha">ओडिशा</option>
          <option value="Punjab">पंजाब</option>
          <option value="Rajasthan">राजस्थान</option>
          <option value="Sikkim">सिक्किम</option>
          <option value="Tamil Nadu">तमिलनाडु</option>
          <option value="Telangana">तेलंगाना</option>
          <option value="Tripura">त्रिपुरा</option>
          <option value="Uttar Pradesh">उत्तर प्रदेश</option>
          <option value="Uttarakhand">उत्तराखंड</option>
          <option value="West Bengal">पश्चिम बंगाल</option>
        </select>

        <label htmlFor="districtname" className="block text-gray-700">
          जिले का नाम * :
        </label>
        <input
          type="text"
          id="districtname"
          name="districtname"
          placeholder="जिले का नाम"
          onChange={handleChange}
          value={formData.districtname}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label
          htmlFor="loksabhaconstituencyname"
          className="block text-gray-700"
        >
          लोकसभा क्षेत्र का नाम * :
        </label>
        <input
          type="text"
          id="loksabhaconstituencyname"
          name="loksabhaconstituencyname"
          placeholder="लोकसभा क्षेत्र का नाम "
          onChange={handleChange}
          value={formData.loksabhaconstituencyname}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label
          htmlFor="vidhansabhaconstituencyname"
          className="block text-gray-700"
        >
          विधानसभा क्षेत्र का नाम * :
        </label>
        <input
          type="text"
          id="vidhansabhaconstituencyname"
          name="vidhansabhaconstituencyname"
          placeholder="विधानसभा क्षेत्र का नाम"
          onChange={handleChange}
          value={formData.vidhansabhaconstituencyname}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="tehsilname" className="block text-gray-700">
          तहसील का नाम * :
        </label>
        <input
          type="text"
          id="tehsilname"
          name="tehsilname"
          placeholder="तहसील का नाम"
          onChange={handleChange}
          value={formData.tehsilname}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label
          htmlFor="zilapanchayatconstituencyname"
          className="block text-gray-700"
        >
          जिला पंचायत क्षेत्र का नाम * :
        </label>
        <input
          type="text"
          id="zilapanchayatconstituencyname"
          name="zilapanchayatconstituencyname"
          placeholder="जिला पंचायत क्षेत्र का नाम "
          onChange={handleChange}
          value={formData.zilapanchayatconstituencyname}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label
          htmlFor="janpadpanchayatconstituencyname"
          className="block text-gray-700"
        >
          जनपद पंचायत क्षेत्र का नाम * :
        </label>
        <input
          type="text"
          id="janpadpanchayatconstituencyname"
          name="janpadpanchayatconstituencyname"
          placeholder="जनपद पंचायत क्षेत्र का नाम "
          onChange={handleChange}
          value={formData.janpadpanchayatconstituencyname}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label
          htmlFor="municipalcorporationname"
          className="block text-gray-700"
        >
          नगर निगम का नाम * :
        </label>
        <input
          type="text"
          id="municipalcorporationname"
          name="municipalcorporationname"
          placeholder="नगर निगम का नाम"
          onChange={handleChange}
          value={formData.municipalcorporationname}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="municipalityname" className="block text-gray-700">
          नगर पालिका का नाम* :
        </label>
        <input
          type="text"
          id="municipalityname"
          name="municipalityname"
          placeholder="नगर पालिका का नाम"
          onChange={handleChange}
          value={formData.municipalityname}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="nagarpanchayatname" className="block text-gray-700">
          नगर पंचायत का नाम * :
        </label>
        <input
          type="text"
          id="nagarpanchayatname"
          name="nagarpanchayatname"
          placeholder="नगर पंचायत का नाम"
          onChange={handleChange}
          value={formData.nagarpanchayatname}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="grampanchayatname" className="block text-gray-700">
          ग्राम पंचायत का नाम * :
        </label>
        <input
          type="text"
          id="grampanchayatname"
          name="grampanchayatname"
          placeholder="ग्राम पंचायत का नाम "
          onChange={handleChange}
          value={formData.grampanchayatname}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="wardno" className="block text-gray-700">
          वार्ड नं * :
        </label>
        <input
          type="text"
          id="wardno"
          name="wardno"
          placeholder="वार्ड नं"
          onChange={handleChange}
          value={formData.wardno}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label htmlFor="pincode" className="block text-gray-700">
          पिनकोड * :
        </label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          placeholder="पिनकोड"
          onChange={handleChange}
          value={formData.pincode}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* More form fields go here */}

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            फोटो अपलोड करें :
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
            onChange={handleFileChange}
          />
        </div>

        <label htmlFor="sagetan" className="block text-gray-700 text-small">
          <b>आप संघठन के किस विभाग में सेवा करना चाहते हैं</b>
        </label>
        <select
          id="sagetan"
          name="sagetan"
          onChange={handleChange}
          value={formData.sagetan}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">अधिकारी कर्मचारी विभाग</option>
          <option value="समाजिक विभाग">समाजिक विभाग</option>
          <option value="राजनैतिक विभाग">राजनैतिक विभाग</option>
          <option value="आर्थिक विभाग धार्मिक विभाग">
            आर्थिक विभाग धार्मिक विभाग
          </option>
          <option value="शिक्षा विभाग">शिक्षा विभाग</option>
          <option value="मीडिया विभाग">मीडिया विभाग</option>
          <option value="कैडर विभाग">कैडर विभाग</option>
          <option value="साहित्य विभाग">साहित्य विभाग</option>
          <option value="सांस्कृतिक विभाग">सांस्कृतिक विभाग</option>
          <option value="महिला विभाग">महिला विभाग</option>
          <option value="छात्र विभाग">छात्र विभाग</option>
          <option value="बेरोजगार विभाग">बेरोजगार विभाग</option>
          <option value="स्वास्थ्य विभाग">स्वास्थ्य विभाग</option>
          <option value="सुरक्षा विभाग">सुरक्षा विभाग</option>
          <option value="न्याय विभाग">न्याय विभाग</option>
          <option value="पेंशनर विभाग">पेंशनर विभाग</option>
          <option value="किसान विभाग">किसान विभाग</option>
          <option value="गरीब विभाग">गरीब विभाग</option>
          <option value="मजदूर विभाग">मजदूर विभाग</option>
        </select>

        <p className="text-gray-700 mt-4">
          सदस्यता शुल्क : ₹100/– ( अनिवार्य )
        </p>
        <br />

        <button
          type="button" // Change to button for payment confirmation
          onClick={handlePayment}
          className="mt-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          भुगतान की पुष्टि करें
        </button>

        {/* Show QR code after payment confirmation */}
        {showQr && (
          <div className="mt-4">
            <QR />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-red-600 rounded-lg shadow-xl shadow-gray-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          ओबीसी महासभा की सदस्यता ग्रहण करें !
        </button>
      </form>
    </div>
  );
};

export default Page;
