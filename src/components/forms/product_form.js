import { reduxForm, Field, FieldArray, arrayPush } from 'redux-form';
import { connect } from 'react-redux';
import React from 'react'

class ProductForm extends React.Component {
    
    constructor(props) {

        super(props);
        console.log(props)
        
    }

    componentWillReceiveProps(nextProps) {
        const product = nextProps.product;
        if(product) {
            // nextProps.initialValues = nextProps.product;
            // Object.keys(product).forEach(key => {
            //     nextProps.initialValues[key] = product[key];
            // });
            this.props.initialize(product)
        }
    }

    renderInputField = ({input, label, meta}) => {

        return (
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{label}</label>
                <input type="text" {...input} className="form-control" />

                {(meta.invalid && meta.touched) &&
                    <div className="alert alert-danger">
                        {meta.error}
                    </div>
                }
            </div>
        );
    };

    renderCategorySelect = ({input, label, meta}) => {
        const categories = this.props.categories;
        return (
            <div className="form-group" >
                <label htmlFor="category">Category</label>
                <select {...input} className="form-control" >
                    <option value="">-</option>
                    {categories && categories.map(
                        category => <option key={category._id} value={category._id}>{category.name}</option>
                    )}
                </select>
                {(meta.invalid && meta.touched) &&
                    <div className="alert alert-danger">
                        {meta.error}
                    </div>
                }
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
        this.props.onFormSubmit(values);

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
                    component={this.renderCategorySelect}
                    name="category"
                    label="Category"
                />
                
                <FieldArray
                    component={this.renderTradewith} 
                    label="Trade with"
                    name="trade_with"
                />

                <Field
                    component={this.renderInputField}
                    name="price"
                    label="Price ( if will not trade )"
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
    
    if(!values.title || values.title.trim().length < 4 ) {
        errors['title'] = 'Title field must be at least 4 characters';
    }
    
    if(!values.location || values.location.trim().length < 4 ) {
        errors['location'] = 'Location field must be at least 4 characters'
    }

    if(!values.category) {
        errors['category'] = 'Category field cannot be empty';
    }

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
    },
    enableReinitialize: true
})(
    connect(mapStateToProps)(ProductForm)
)