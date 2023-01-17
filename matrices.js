function Matrices(){
    this.shape = (m) => {
        const shapes = [];
        let dimension = m;
        while(dimension && Array.isArray(dimension)) {
            shapes.push(dimension.length);
            dimension = (dimension.length && [...dimension][0]) || null;
        }

        console.log(shapes);
    }

    this.generate = (mShape, fill) => {
        const generateRecursively = (recShape, recIndices) => {
            if(recShape.length === 1) {
                console.log(Array(recShape[0]).fill(null).map((cellValue, cellIndex) => fill([...recIndices, cellIndex])))
            }

            const m = [];
            for(let i= 0; i< recShape[0]; i += 1) {
                m.push(generateRecursively(recShape.slice(1), [...recIndices, i]));
            }

            console.log(m);
        };

        console.log(generateRecursively(mShape, []));
    }

    this.zeros = (n) => {
        console.log(this.generate(n, () => 0));
    }
}

let matrix = new Matrices();
matrix.zeros(5);