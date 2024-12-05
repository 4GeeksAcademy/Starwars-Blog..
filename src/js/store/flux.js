import Favoritos from "../component/favoritos";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			//Agregar un Fvorito
			addFavorito: item => {
				const store = getStore();
				if (!store.favoritos.some(favorito => favorito.uid === item.iud)) {
					setStore({ favoritos: [...store.favoritos, item] });
				}
			},
			//Eliminar un Favorito
			removeFavorito: item => {
				const store = getStore();
				setStore({
					favoritos: store.favoritos.filter(favorito => favorito.uid !== item.uid)
				});
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
