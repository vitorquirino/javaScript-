let t1 = document.getElementById("t1")
        let t2 = document.getElementById("t2")

        t1.onclick = ColocarEmMaiusculo
        t2.onclick = ColocarEmMaiusculo

        function ColocarEmMaiusculo() {
            this.innerHTML = this.innerHTML.toUpperCase()
        }