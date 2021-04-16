import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faChevronLeft,
    faCircle,
    faCheckCircle,
    faPlus,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';


const saveItems = (items) => {
    localStorage.setItem('shopping-list', JSON.stringify(items));
};


function App() {

    const [items, setItems] = useState([
        {itemName: 'Kalem', quantity: 1, isSelected: false},
        {itemName: 'Defter', quantity: 3, isSelected: true},
        {itemName: 'Kitap', quantity: 2, isSelected: false},
    ]);

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('shopping-list')));
    }, []);


    const deleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
        saveItems(newItems);
    };

    const quantityIncrease = (index) => {
        const newItems = [...items];
        newItems[index].quantity++;
        setItems(newItems);
        saveItems(newItems);
    };

    const quantityDecrease = (index) => {
        const newItems = [...items];
        if (newItems[index].quantity > 0) {
            newItems[index].quantity--;
        }
        setItems(newItems);
        saveItems(newItems);
    };

    const handleAddButtonClick = () => {
        if (inputValue.length < 3) {
            return;
        }
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false,
        };
        const newItems = [...items, newItem];
        setItems(newItems);
        setInputValue('');
        saveItems(newItems);
    };

    const toggleComplete = (index) => {
        const newItems = [...items];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItems(newItems);
        saveItems(newItems);
    };


    return (
        <div className="app-background">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className='main-container'>
                <div className='add-item-box'>
                    <input value={inputValue}
                           onChange={(event) => setInputValue(event.target.value)}
                           onKeyPress={(event) => {
                               if (event.key === 'Enter') {
                                   handleAddButtonClick();
                               }
                           }}
                           className='add-item-input'
                           placeholder='Isim Giriniz...'
                    />
                    <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()}/>
                </div>
                <div className='item-list'>
                    {items &&
                    items.map((item, index) => (
                        <div className='item-container' key={index}>
                            <div className='item-name' onClick={() => toggleComplete(index)}>
                                <div className='item-row'>
                                    <FontAwesomeIcon icon={item.isSelected ? faCheckCircle : faCircle}/>
                                    <span>{item.itemName}</span>
                                </div>
                            </div>
                            <div className='right-container'>
                                <button className='button delete' onClick={() => deleteItem(index)}>
                                    <FontAwesomeIcon icon={faTrash}/>
                                </button>

                                <div className='quantity'>
                                    <button className='button' onClick={() => quantityDecrease(index)}>
                                        <FontAwesomeIcon icon={faChevronLeft}/>
                                    </button>
                                    <span> {item.quantity} </span>
                                    <button className='button' onClick={() => quantityIncrease(index)}>
                                        <FontAwesomeIcon icon={faChevronRight}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
