import React, { useRef } from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { Div } from '../ui/ButtonFilter';
import NoSsr from '@material-ui/core/NoSsr';
import useMovies from '../hooks/useMovies';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

export default function Genres() {
  const { handleGenresData, deleteFromGernes, genres } = useMovies();
  const inputRef = useRef();
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    multiple: true,
    options: genres,
    getOptionLabel: (option) => option.name,
  });

  return (
    <Div>
      <NoSsr>
        <div>
          <div {...getRootProps()}>
            <InputWrapper
              ref={setAnchorEl}
              className={focused ? 'focused' : ''}
            >
              {value.map((option, index) => (
                <Tag
                  label={option.name}
                  {...getTagProps({ index })}
                  onClick={() => deleteFromGernes(value, option)}
                />
              ))}

              <input {...getInputProps()} />
            </InputWrapper>
          </div>
          {groupedOptions.length > 0 ? (
            <Listbox
              {...getListboxProps()}
              ref={inputRef}
              onClick={(e) => {
                inputRef.current = e.target.textContent;
                return handleGenresData(inputRef.current, genres);
              }}
            >
              {groupedOptions.map((option, index) => (
                <li {...getOptionProps({ option, index })}>
                  <span>{option.name}</span>
                </li>
              ))}
            </Listbox>
          ) : null}
        </div>
      </NoSsr>
    </Div>
  );
}

const InputWrapper = styled.div`
  width: 300px;
  border: 1px solid #d9d9d9;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 500;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  & input {
    font-size: 16px;
    font-weight: 500;
    padding: 0.6em 1.4em 0.5em 0.8em;
    height: 35px;
    box-sizing: border-box;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
    color: red;
  }
`;

const Listbox = styled('ul')`
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: red;
    }
  }

  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;
