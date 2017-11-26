import { reduxForm, Field, FieldArray, arrayPush } from 'redux-form';
import { connect } from 'react-redux';
import ImageList from '../common/imageList.js';
import React from 'react'


class ProductForm extends React.Component {


    renderInputField = (field) => {
        return (
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{field.label}</label>
                <input type="text" {...field.input} className="form-control" />
            </div>
        );
    };

    renderCategorySelect = (field) => {
        const categories = this.props.categories;
        return (
            <div className="form-group" >
                <label htmlFor="category">Category</label>
                <select {...field.input} className="form-control" >
                    <option value="">-</option>
                    {categories && categories.map(
                        category => <option key={category._id} value={category._id}>{category.name}</option>
                    )}
                </select>
            </div>
        )
    };

    renderTradewith = ({fields, meta, label}) => {

        return (
            <div className="form-group">
                <label htmlFor="trade_with">Trade With</label>
                {fields.map((item, index) => 
                    <div key={index} >
                        <label htmlFor={name}>{`Product ${index+1} `} : </label>
                        <div className="input-group">
                            <Field
                                component="input" 
                                type="text"
                                name={item}
                                className="form-control"
                            />
                            <span className="input-group-btn">
                                <input 
                                    type="button" 
                                    value="-" 
                                    className="btn btn-danger" 
                                    onClick={() => fields.remove(index)} 
                                />
                            </span>
                        </div>
                    </div>
                )}
                <br/>
                <div>
                    <input 
                        type="button" 
                        value="Add another" 
                        className="btn btn-success pull-right" 
                        onClick={() =>fields.push()} 
                    />
                </div>
            </div>
        );
    }

    renderImage = (field) => {
        return <img src={field.input.value} className="img img-thumbnail" alt="product-image" />
        
    }

    renderImageList = ({fields, meta, label}) => {

        return (
            <div>
                <label> {label}: </label> <br/>
                <div className="row">
                    {fields && fields.map((image, index) => 
                        <div className="col-xs-3" key={index}>
                            <button 
                                type="button" 
                                className="close" 
                                aria-label="Close"
                                onClick={() => fields.remove(index)}    
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            {image}
                            <Field component={this.renderImage} name={image} />
                        </div>
                    
                    )}
                </div>
                <br/>
                <div className="row">
                    <input 
                        type="file" 
                        className="form-control" 
                        onChange={(e) => this.addImage(e)}
                    />
                </div>
            </div>
        );
    }

    addImage = (e, fields) => {
        const files = e.target.files;

        if(files && files.length > 0) {
            for(var i =0 ; i < files.length; i++ ) {
                var reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onload =  () => {
                    this.props.dispatch(arrayPush('productForm', 'images', reader.result));
                };
                // reader.onerror = function (error) {
                //     console.log('Error: ', error);
                // };
            }
        }
    }
    
    submitProduct = (values) => {
        console.log('values after submit', values);
    }

    render() {
        const { handleSubmit, fields } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submitProduct)} >
                <Field 
                    component={this.renderInputField} 
                    name="title" 
                    label="Title"
                />
                
                <Field
                    component={this.renderInputField}
                    name="location"
                    label="Location"
                />

                <Field
                    component={this.renderInputField}
                    name="price"
                    label="Price ( if will not trade )"
                />

                <Field
                    component={this.renderCategorySelect}
                    name="category"
                    label="Category"
                />
                
                <FieldArray
                    component={this.renderTradewith} 
                    label="Trade with"
                    name="trade_with"
                />

                <FieldArray
                    component={this.renderImageList}
                    label="Images"
                    name="images"
                />
                
                <button type="submit" className="btn btn-primary" > Submit </button>
            </form>
        ) 
    }
}


function validate(values) {
    const errors = {} ;

    return errors;
}

function mapStateToProps(state) {
    return { categories: state.categories };
}

export default reduxForm({
    form: 'productForm',
    validate,
    fields: ['title', 'location', 'trade_with', 'category', 'images'],
    initialValues: {
        'trade_with': [''],
        
    }
})(
    connect(mapStateToProps)(ProductForm)
)