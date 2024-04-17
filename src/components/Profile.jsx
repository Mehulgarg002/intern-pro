import React, { useContext, useEffect, useRef, useState } from 'react';
import { TbCameraPlus } from "react-icons/tb";
import authContext from '../useContext/authContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  let navigate = useNavigate();
  let { signedUp, signedIn } = useContext(authContext);
  const defaultAvatar = "s1.png";
  const imgRef = useRef(null);
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({ profile: "", location: "" });
  const [useDefault, setUseDefault] = useState(false);

  let token = localStorage.getItem('token')
  let data = JSON.parse(token)
  let value = data.authtoken

  useEffect(() => {
    if (signedUp === true && signedIn === false && localStorage.getItem('token')) {

    }
    else if (signedUp === false && signedIn === true && localStorage.getItem('token')) {
      navigate('/')
    }
    else {
      navigate("/signin")
    }
  },)


  const uploadImage = (e) => {
    const data = e.target.files[0];
    const file = URL.createObjectURL(data)
    setImage(file);
    setForm({ ...form, profile: file });
    setUseDefault(false);
  };

  const handleDefaultImage = () => {
    setUseDefault(true);
    setImage(defaultAvatar);
  };

  const handleChange = () => {
    imgRef.current.click();
  };

  const onChange = (e) => {
    setForm({ ...form, location: e.target.value });
  };


  const reload = () => {
    window.location.reload();
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/updateprofile", {
      method: 'PUT',
      headers: {
        'content-type': "application/json",
        'auth-token': value,
      }, body: JSON.stringify({ profilePic: form.profile, location: form.location })
    });
    const json = await response.json()
    if (json) {
      navigate("/designer");
    }
    else {
      alert("invalid credentials")
    }
  }

  return (
    <>
      <div className="mt-10 ml-10"><img src="dribble.png" alt="" /></div>
      <div className='container w-2/4 mx-auto flex flex-col  mt-10 h-[82vh] '>
        <div className='mx-auto flex flex-col mt-5 ' >
          <span className="text-4xl font-bold">Welcome! Let's create your profile</span>
          <span className='text-gray-500 text-sm mt-4'>Let others know you better! You can do these later</span>
          <span className='font-bold text-xl mt-7'>Add an Avatar</span>
          <span className='relative inline-block mt-8'>
            {image || useDefault ?
              <div className='relative'>
                <img src={image || defaultAvatar} alt="avatar" className='rounded-full h-32 w-32 object-cover' />
              </div>
              :
              <div onClick={handleChange} className='relative rounded-full h-32 w-32 object-cover border-2 border-dashed border-gray-300' >
                <TbCameraPlus className='absolute top-[3.25rem] right-[3.25rem]' style={{ color: "#1c1c1c", backgroundColor: '#ffffff' }} />
              </div>
            }
            <button onClick={handleChange} className='absolute top-2 left-44 p-2 border border-gray-300 rounded-lg font-semibold'>Choose image</button>
            <button onClick={handleDefaultImage} className='absolute top-16 left-44 text-gray-400 font-semibold'>&gt; or choose one of our defaults</button>
            <label htmlFor="profile"></label>
            <input hidden ref={imgRef} type="file" id='profile' name='profile' accept='image/*' className='border rounded px-1 py-2 mt-4' onChange={uploadImage} />
          </span>
          <label htmlFor="location" className="mt-10 leading-7 text-lg font-semibold text-gray-800"><b>Add your location</b></label>
          <input style={{ maxWidth: 'none' }} onChange={onChange} value={form.location} placeholder='Enter a location' type='text' id='location' name='location' className='mt-5 border-b border-gray-300 outline-0' />
          <button onClick={onSubmit} disabled={!image && !useDefault} style={{ width: 'fit-content' }} className={`py-1 px-20 text-white rounded-lg mt-10 outline-0 ${image || useDefault ? 'bg-pink-600 hover:bg-pink-400' : 'bg-pink-200'}`}>Next</button>
          {image && <button onClick={reload} className='text-sm text-gray-400 font-bold mt-3 flex'>Or Press Return</button>}
        </div>
      </div>
    </>
  );
};

export default Profile;



