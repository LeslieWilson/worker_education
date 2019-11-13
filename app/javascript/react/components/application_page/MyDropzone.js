import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const MyDropzone=()=>{
  const maxSize = 1048576;
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, [])

  const {getRootProps, getInputProps, isDragActive, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    onDrop,
    accept:'image/png',
    minSize: 0,
    maxSize,
  });
  const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

  return (
  <div className="dropzonetextmsgs">
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {!isDragActive && 'Click here or drop a file to upload!'}
      {isDragActive && !isDragReject && "Drop it like its hot!"}
      {isDragReject && "File type not accepted, sorry!"}
      {isFileTooLarge && (
      <div className="warning_message">
          File is too large.
      </div>
    )}
  </div>

      <ul className="list-group mt-2">
        {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
          <li className="list_of_downloads">
            {acceptedFile.name}
          </li>
        ))}
      </ul>
  </div>
  );
};

export default MyDropzone
