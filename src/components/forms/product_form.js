import { reduxForm, Field, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
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
        console.log('fields is ', fields);
        if(fields.length  == 0) {
            fields.push();
        };

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
                                <input type="button" value="-" className="btn btn-danger" onClick={() => fields.remove(index)} />
                            </span>
                        </div>
                    </div>
                )}
                <br/>
                <div>
                    <input type="button" value="Add another" className="btn btn-success pull-right" onClick={() =>fields.push()} />
                </div>
            </div>
        );
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
    fields: ['title', 'location', 'trade_with', 'category']
})(
    connect(mapStateToProps)(ProductForm)
)