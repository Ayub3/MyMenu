import react, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Items from './Data';
import Categories from './Categories';
import logo from './logo.JPG';

const allCategories = ['all', ...new Set(Items.map((item) => item.category))];

function App() {
    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === 'all') {
            setMenuItems(Items);
            return;
        }
        const newItems = Items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    const [menuItems, setMenuItems] = useState(Items);
    const [activeCategory, setActiveCategory] = useState('');
    const [categories, setCategories] = useState(allCategories);
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    {/* <img src={logo} alt="logo" className="logo" /> */}
                    <h2>Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories
                    categories={categories}
                    activeCategory={activeCategory}
                    filterItems={filterItems}
                />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
