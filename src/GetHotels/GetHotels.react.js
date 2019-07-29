import React from 'react';
import ShowHotels from '../ShowHotels/ShowHotels.react';



class GetHotels extends React.Component {
    constructor(props) {
        super(props);
        this.state={hotelList:[]}
    }
    componentDidMount(){
        let url= "http://localhost:3000/hoteldata"
        fetch(url)
        .then(resp=>resp.json())
        .then(hotelList=>this.setState({hotelList}));
    }

    render() {
        return (
            <div >
                  <ShowHotels hotelList={this.state.hotelList}></ShowHotels>
            </div>
        );
    }
}

export default GetHotels;