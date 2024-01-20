import styled from 'styled-components';
import propTypes from 'prop-types';
import React from 'react';

const Wrapper = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
    background-color: #bfbfbf;

    input {
        display: none;
    }

    label,
    label div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10rem;
        height: 10rem;
        cursor: pointer;
        border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
    }
`

export default function Avatar({ className, isSquare, ...attrs }) {

    const [selectedFile, setSelectedFile] = React.useState(null)
    const [preview, setPreview] = React.useState(null)
  
    React.useEffect(() => {
      const objectUrl = selectedFile && URL.createObjectURL(selectedFile)
      setPreview(objectUrl)
  
      return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
  
    Avatar.propTypes = {
        isSquare: propTypes.bool,
    }

    Avatar.defaultProps = {
        isSquare: false,
    }

    return (
        <Wrapper className={className} isSquare={isSquare}>

            <input
                id="Avatar"
                type="file"
                value=""
                onChange={(e) => setSelectedFile(e.target.files[0])}
            />

            <label htmlFor="Avatar">
                {
                    preview ?
                        <div style={{
                            backgroundImage: `url(${preview})`,
                            backgroundSize: 'cover',
                        }} />
                        : 'upload image'
                }
            </label>

        </Wrapper>
    )
}