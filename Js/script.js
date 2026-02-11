const app = Vue.createApp({
    data() {
        return {
            prendas: [],
            nuevaPrenda: {
                nombre: '',
                cantidad: 0,
                precio: 0
            }
        };
    },
    methods: {
        agregarPrenda() {
            if (this.nuevaPrenda.nombre.trim() && this.nuevaPrenda.cantidad > 0 && this.nuevaPrenda.precio >= 0) {
                this.prendas.push({
                    nombre: this.nuevaPrenda.nombre.trim(),
                    cantidad: this.nuevaPrenda.cantidad,
                    precio: this.nuevaPrenda.precio
                });
                this.nuevaPrenda.nombre = '';
                this.nuevaPrenda.cantidad = 0;
                this.nuevaPrenda.precio = 0;
            }
        },
        incrementarCantidad(index) {
            this.prendas[index].cantidad++;
        },
        decrementarCantidad(index) {
            if (this.prendas[index].cantidad > 1) {
                this.prendas[index].cantidad--;
            }
        },
        eliminarPrenda(index) {
            this.prendas.splice(index, 1);
        },
        importePrenda(index) {
            return this.prendas[index].cantidad * this.prendas[index].precio;
        }
    },
    computed: {
        totalPrendas() {
            return this.prendas.reduce((total, prenda) => total + prenda.cantidad, 0);
        },
        totalDinero() {
            return this.prendas.reduce((total, prenda) => total + (prenda.cantidad * prenda.precio), 0);
        }
    }
});

app.mount('#almacen');