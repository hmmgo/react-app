
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import ReactPaginate from 'react-paginate'
import ScrollToTop from 'react-scroll-up'


const SomeElement = (props) => {
  return <li className="list-group-item"><h3>{props.id}. {props.name}</h3><p>{props.email}.</p>
      <form action="http://google.com/search" target="_blank">
      <input type="hidden" name="q" value={props.name} />
          <input className="btn btn-primary" type="submit" value="search"/>
  </form>
      <p><a target="blank" className="btn btn-outline-primary" href={props.web} >{props.webs}</a></p>

      <div className="form-group">
          <input type="email" className="form-control" id={props.email2} defaultValue={props.emails} aria-describedby="emailHelp" placeholder="Enter email"  />
      </div>

      <div className="form-group">
          <textarea className="form-control" id={props.contact} rows="3"  placeholder="Contact" defaultValue={props.contacts}  ></textarea>
      </div>
      <div className="form-group">
          <textarea className="form-control" id={props.mes} rows="3"  placeholder="Message" defaultValue={props.messages}  ></textarea>
      </div>
      <div className="form-check">
          <label className="form-check-label">
              <input type="checkbox" id={props.imp} className="form-check-input" defaultValue="1"  />
                  Important
          </label>
      </div>
      <button  id=".$result->id." onClick={meow.bind(this,props.id)} className="btn btn-success">Submit</button>

  </li>;
}

class SomeParentElement extends Component {
  constructor() {
    super();
    this.state = {
        value: '',
        data: ''
    };

    this.elements = [];
    this.meow = [];
      this.xx = [];
  }

  componentDidMount() {
    const component = this;
    const URL = `api-url`;
    fetch(URL)
        .then((data) => data.json())
        .then((json) => {
          component.setState({data:json});
        });
  }

    componentWillUpdate(a,b){
        this.meow = b.data
if (this.xx != 2){
    for(let i = 0; i < 10; i++) {
        let web = 'http://'+b.data[i].email.split('@')[1]
        let webs = b.data[i].email.split('@')[1]
        let email2 = b.data[i].id+'-email'
        let contact = b.data[i].id+'-contact'
        let mes = b.data[i].id+'-mes'
        let imp = b.data[i].id+'-imp'
        this.elements.push(<SomeElement key={b.data[i].id}
                                        id={b.data[i].id}
                                        name={b.data[i].name}
                                        web={web}
                                        webs={webs}
                                        email2={email2}
                                        contact={contact}
                                        mes={mes}
                                        imp={imp}
                                        email={b.data[i].email}
                                        contacts={b.data[i].contact}
                                        messages={b.data[i].message}
                                        emails={b.data[i].email2}
        />)
    }
}

    }

  meows(a){
    //console.log(this.meow);
      this.xx =2;
      this.elements = [];
    for(let i = a*10; i < a*10+10; i++) {
        if(typeof this.meow[i] != 'undefined') {
            let web = 'http://'+this.meow[i].email.split('@')[1]
            let webs = this.meow[i].email.split('@')[1]
            let email2 = this.meow[i].id+'-email'
            let contact = this.meow[i].id+'-contact'
            let mes = this.meow[i].id+'-mes'
            let imp = this.meow[i].id+'-imp'
            this.elements.push(<SomeElement key={this.meow[i].id}
                                            id={this.meow[i].id}
                                            name={this.meow[i].name}
                                            web={web}
                                            webs={webs}
                                            email2={email2}
                                            contact={contact}
                                            mes={mes}
                                            imp={imp}
                                            email={this.meow[i].email}
                                            contacts={this.meow[i].contact}
                                            messages={this.meow[i].message}
                                            emails={this.meow[i].email2}
            />)
        }

    }

  }

    handlePageClick = (data) => {
        let selected = data.selected;
        //console.log(selected);
        let offset = Math.ceil(selected * 10);

        this.meows(selected);
        ReactDOM.render(<SomeParentElement amount={10} />, document.querySelector("#app"));
    };

  render() {

if(Object.keys(this.meow).length){
    return (
        <div className="container">
            <nav aria-label="Page navigation">
                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<a className="page-link">...</a>}
                               pageNum={Math.ceil(Object.keys(this.meow).length/10)}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               clickCallback={this.handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"page-item"}
                               pageClassName= {"page-item"}
                               pageLinkClassName= {"page-link"}
                               activeClassName={"active"}
                               previousClassName={"page-item"}
                               breakClassName={"page-item"}
                               nextClassName={"page-item"}
                               previousLinkClassName={"page-link"}
                               nextLinkClassName={"page-link"}

                /></nav>
            <ul className="list-group">
                {this.elements}
            </ul>
            <ScrollToTop showUnder={160} duration={500}>
                <span><button className="btn btn-danger">UP</button></span>
            </ScrollToTop>
        </div>
    )
} else
{
    return (
        <div className="container"></div>
    )
}

  }
}
ReactDOM.render(<SomeParentElement amount={10} />, document.querySelector("#app"));

function meow(a){
    $.post( "api-url", { id: a, contact: $('#'+a+'-contact').val(), email: $('#'+a+'-email').val(), mes: $('#'+a+'-mes').val(), imp: $('#'+a+'-impo').val()  } )
        .done(function() {
            alert( "success" );
        })
        .fail(function() {
            alert( "error" );
        });
}
