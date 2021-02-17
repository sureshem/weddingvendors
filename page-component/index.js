import { useState } from "react";
import Button from '../../components/button'
const PrizeInfo = (props) => {
    const [isdropdownopen,setisdropdownopen] = useState(false)
    const IsdropdownHandle = () => {
        setisdropdownopen(true)
    }
        return (
            <>		
                <section className="pi">
                    <section className="pi__lst" onClick={() => setisdropdownopen(!isdropdownopen)}>
                        <span className={`pi__lst__itm ${isdropdownopen ? 'pi__lst__itm--open' : ''}`}>Locality </span>
                        <span className={`pi__lst__itm ${isdropdownopen ? 'pi__lst__itm--open' : ''}`}>Budget Per Function </span>
                        <span className={`pi__lst__itm ${isdropdownopen ? 'pi__lst__itm--open' : ''}`}>Rating </span>
                    </section>
                    {isdropdownopen ?
                    <section className="pi__det">
                        <section className="pi__det__info">
                            <input type="text" placeholder="Search Locality" className="pi__det__info__si" />
                            <div class="pi__det__info__fgroup">
                                <input className="pi__det__info__fgroup__ipt" type="checkbox" id="Adambakkam" />
                                <label className="pi__det__info__fgroup__lbl" for="Adambakkam">Adambakkam</label>
                            </div>
                            <div class="pi__det__info__fgroup">
                                <input className="pi__det__info__fgroup__ipt" type="checkbox" id="Adyar" />
                                <label className="pi__det__info__fgroup__lbl" for="Adyar">Adyar</label>
                            </div>
                            <div class="pi__det__info__fgroup">
                                <input className="pi__det__info__fgroup__ipt" type="checkbox" id="Alwarpet" />
                                <label className="pi__det__info__fgroup__lbl" for="Alwarpet">Alwarpet</label>
                            </div>
                            <span className="pi__det__info__mr">More </span>
                        </section>
                        <section className="pi__det__info">
                        <div class="pi__det__info__fgroup">
                            <input className="pi__det__info__fgroup__ipt" type="checkbox" id="<15K" />
                            <label className="pi__det__info__fgroup__lbl" for="<15K">&lt;15K</label>
                        </div>
                        <div class="pi__det__info__fgroup">
                            <input className="pi__det__info__fgroup__ipt" type="checkbox" id="15K - 20K" />
                            <label className="pi__det__info__fgroup__lbl" for="15K - 20K">15K - 20K</label>
                        </div>
                        <div class="pi__det__info__fgroup">
                            <input className="pi__det__info__fgroup__ipt" type="checkbox" id="20K - 25K" />
                            <label className="pi__det__info__fgroup__lbl" for="20K - 25K">20K - 25K</label>
                        </div>
                        
                        <div class="pi__det__info__fgroup">
                            <input className="pi__det__info__fgroup__ipt" type="checkbox" id="30K+" />
                            <label className="pi__det__info__fgroup__lbl" for="30K+">30K+</label>
                        </div>
                        </section>
                        <section className="pi__det__info">
                        <div className="radio">
                            <input id="radio-1" name="radio" type="radio" checked />
                            <label for="radio-1" className="radio-label">All Ratings</label>
                        </div>
                        <div className="radio">
                            <input id="radio-2" name="radio" type="radio" />
                            <label  for="radio-2" className="radio-label">Rated &lt;4</label>
                        </div>
                        <div className="radio">
                            <input id="radio-3" name="radio" type="radio" />
                            <label  for="radio-3" className="radio-label">Rated 4+</label>
                        </div>
                        <div className="radio">
                            <input id="radio-4" name="radio" type="radio" />
                            <label  for="radio-4" className="radio-label">Rated 4.5+</label>
                        </div>
                        </section>
                        <section className="pi__det__info__btn">
                            <Button>Reset</Button >
                            <Button bgcolor={`bgcolor`}>View Results</Button >
                        </section>
                    </section>
                    : ""}
                </section>
			
			<style>
				{
					`
                    .pi{margin-top: -30px;margin-bottom:30px;box-shadow: rgb(0 0 0 / 5%) 0px 1px 5px 0px; line-height: 50px;}
                    .pi__lst{display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:50px;padding: 0 15px;  align-items: center; justify-content:space-between; font-size: 16px;border-bottom: 1px solid #d7d7d7;}
                    .pi__lst__itm{color:#262626;position:relative;cursor:pointer;}
                    .pi__det__info__mr{position:relative;cursor:pointer;}
                    .pi__lst__itm:hover{color:#e72e77;}
                    .pi__lst__itm--open{color:#e72e77;}
                    .pi__lst__itm:last-child{margin-right:15px;}
                    .pi__lst__itm:after{ position: absolute; content: ''; right:0; top: 50%; border: 5px solid transparent; border-top: 6px solid #262626; transform: translateY(-50%); margin-top: 5px; }
                    .pi__det__info__mr:after{ position: absolute; content: ''; right:-15px; top: 50%; border: 5px solid transparent; border-left: 6px solid #262626; transform: translateY(-50%); margin-top: 3px; }
                    .pi__lst__itm--open:after{border-top: 6px solid #e72e77}
                    .pi__lst__itm:hover:after{border-top: 6px solid #e72e77;}
                    .pi__det{display: grid;    grid-template-columns:repeat(3,1fr);grid-column-gap:30px; align-items: flex-start;padding:0 15px 30px;  justify-content:space-between; font-size: 16px;margin:0 0 30px;border-bottom: 1px solid #d7d7d7;}
                    .pi__det__info{padding:10px 0;}
                    .pi__det__info:last-child{margin-right:15px;}
                    .pi__det__info__si{color:#262626; appearance: none;margin:5px 0; outline: none; border: 1px solid #d7d7d7; border-radius: 2px; width: 100%; height: 50px; padding: 0px 15px; box-sizing: border-box; transition: all 0.5s ease 0s; text-align: left; font-size: 16px; line-height: 16px; letter-spacing: 0.7px;}

                    .pi__det__info__fgroup { display: block; margin: 15px 0 0;line-height:15px; }
                    .pi__det__info__fgroup__ipt { padding: 0; height: initial; width: initial; margin-bottom: 0; display: none; cursor: pointer; }
                    .pi__det__info__fgroup__lbl { position: relative; cursor: pointer; }
                    .pi__det__info__fgroup__lbl:before { content:''; -webkit-appearance: none; background-color: transparent; border: 2px solid #e72e77; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05); padding: 7px; display: inline-block; position: relative; vertical-align: middle; cursor: pointer; margin-right: 5px;    margin-top: -3px; }
                    .pi__det__info__fgroup__ipt:checked + .pi__det__info__fgroup__lbl:after { content: ''; display: block; position: absolute; top: 4px; left: 6px; width: 5px; height: 10px; border: solid #e72e77; border-width: 0 2px 2px 0; transform: rotate(45deg); }
                    .pi__det__info__btn{display:flex;align-items:center;}
                    .radio { margin:15px 0 0; line-height:16px;}
                    .radio input[type="radio"] { position: absolute; opacity: 0; }
                    .radio input[type="radio"] + .radio-label:before { content: ''; background: transparent; border-radius: 100%; border: 2px solid #e72e77; display: inline-block; width: 15px; height:15px; position: relative; top: -0.2em; margin-right: 1em; vertical-align: top; cursor: pointer; text-align: center; -webkit-transition: all 250ms ease; transition: all 250ms ease; }
                    .radio input[type="radio"]:checked + .radio-label:before { background-color: #e72e77; box-shadow: inset 0 0 0 4px #fff; }
                    .radio input[type="radio"]:focus + .radio-label:before { outline: none; border-color: #e72e77; }
                    .radio input[type="radio"]:disabled + .radio-label:before { box-shadow: inset 0 0 0 4px #f4f4f4; border-color: #e72e77; background: #e72e77; }
                    .radio input[type="radio"] + .radio-label:empty:before { margin-right: 0; }
						
					`
				}
			</style>
		</>
        );
    }

export default PrizeInfo;
