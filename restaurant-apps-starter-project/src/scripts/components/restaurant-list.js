class RestaurantList extends HTMLElement{
    connectedCallback() {
        this.render();
    }

    set data(data){
        this._data = data;
        this.render();
    }

    render(){
        this.id = "restaurant";
        this.innerHTML = `
        <h1>Explore The Restaurants</h1>
        <ul></ul>
        `;

        this._data.restaurants.forEach(e => {
            const list = document.createElement("li");
            const restaurantItem = document.createElement("restaurant-item");
            restaurantItem._data = e;
            console.log(e);
            list.appendChild(restaurantItem);
            this.querySelector("ul").appendChild(list);
        });
    }
}

customElements.define("restaurant-list", RestaurantList);