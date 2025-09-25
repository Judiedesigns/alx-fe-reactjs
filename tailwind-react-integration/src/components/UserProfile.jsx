import user from '/user.jpg';

function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-8 max-w-xs sm:max-w-sm my-20 mx-auto rounded-lg shadow-lg text-center">
      <img src={user} alt="User" className='rounded-full w-24 h-24 sm:w-36 sm:
      h-36 mx-auto object-cover'/>
      <h1 className='text-lg sm:text-xl text-blue-800 my-4'>John Doe</h1>
      <p className='text-gray-600 text-sm sm:text-base'> Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;


// Paragraph (p):

// Set the text color to gray-600 (text-gray-600).
// Make the font size slightly smaller than the heading (text-base).