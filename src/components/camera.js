import React from 'react';

const Image = () => {
  return (
    <div>
      <input id="image-input" accept="image" type="file" capture="user" />
      <script>
        {/* {const fileInput = document.getElementById('image-input');
  fileInput.addEventListener('change', (e) => doSomethingWithFiles(e.target.files));
  } */}
      </script>
    </div>
  );
};

export default Image;
