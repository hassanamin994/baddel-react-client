import React from 'react'


class ImageList extends React.Component {

    constructor(props) {
        console.log('props are', props)
        super(props);
        this.state = { images: props.images || [] };
    }

    renderImage = (data) => {
        return (
                <div className="col-xs-3" key={data}>
                    <img src={data} alt="product-image" />
                </div>
        )
    };

    render() {
        return (
            <div className="row">
                {this.state.images && this.state.images.map(image => this.renderImage(image) )}
            </div>
        );
    }
}

export default ImageList;