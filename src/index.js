import { h, render, Component } from 'preact';

class App extends Component {

    state = {
        data: [99, 44, 11, 55, 33, 115, 4]
    }

    _shuffuleArray(array) {
        var j, temp, i;
        for (i = array.length; i; i--) {
            j = Math.floor(Math.random() * i);
            temp = array[i - 1];
            array[i - 1] = array[j];
            array[j] = temp;
        }
        return array;
    }

    shuffule = () => this.setState({ data: this._shuffuleArray(this.state.data) })

    render(props, { data }) {
        return (
            <main>
    			<Chart data={data}/>
    			<button onClick={this.shuffule}>Suffule</button>
    		</main>
        )
    }
}

class Chart extends Component {
    render({ data }) {
        return (
            <svg width="420" height="120">
			  {data.map((item ,i)=>
			  	<rect
		  			width="40"
		  			y={120 - item} 
		  			x="50" 
		  			height={item} 
		  			transform={`translate(${43 * i},0)`}
	  			/>
		  		)}
			</svg>
        )
    }
}


render(<App/>, document.body)
