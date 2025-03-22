import {useState} from 'react';


function useToggled(initialValue: boolean = false): [boolean, () => void ] {

const [value, setValue] = useState(initialValue);
const hookToggle = () => {

    setValue((prev) => !prev);

};
    return [value,hookToggle];
}
export default useToggled;