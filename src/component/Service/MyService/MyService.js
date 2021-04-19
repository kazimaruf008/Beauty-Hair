import React from 'react';
import fast1 from '../../images/fast1.PNG'
import fast2 from '../../images/fast2.PNG'
import fast3 from '../../images/fast3.PNG'
import Service from '../Service/Service';
// import AllService from '../AllService/AllService';

const MyService = () => {
    return (
        <div className="container">
           <div className="row mt-5">
               <div className="col-md-6 m text-center">
                   <h1 className='mb-5 m'>Hair Cut & Hairdryer</h1>
                   <small className="m">
                        This improvement upon the original usage was introduced by no less a man than <br/>
                        Stubb, in order to afford the imperilled harpooneer the strongest possible<br/>
                        guarantee for the faithfulness and vigilance of his monkey-rope holder.<br/>
                   </small>
                   <button className="btn btn-primary mt-3">More</button>
               </div>
               <div className="col-md-6 m"><img src={fast1} alt=""/></div>
           </div>
           <div className="row">
               <div className="col-md-6"><img src={fast2} alt=""/></div>
               <div className="col-md-6 text-center">
                   <h1 className='mb-5'>Hair Cut & Hairdryer</h1>
                   <small className="">
                        This improvement upon the original usage was introduced by no less a man than <br/>
                        Stubb, in order to afford the imperilled harpooneer the strongest possible<br/>
                        guarantee for the faithfulness and vigilance of his monkey-rope holder.<br/>
                   </small>
                   <button className="btn btn-primary mt-3">More</button>
               </div>
           </div>
           <div className="row m">
           <div className="col-md-6 text-center">
                   <h1 className='mb-5 m'>Hair Cut & Hairdryer</h1>
                   <small className="m">
                        This improvement upon the original usage was introduced by no less a man than <br/>
                        Stubb, in order to afford the imperilled harpooneer the strongest possible<br/>
                        guarantee for the faithfulness and vigilance of his monkey-rope holder.<br/>
                   </small>
                   <button className="btn btn-primary mt-3">More</button>
               </div>
               <div className="col-md-6"><img src={fast3}/></div>
           </div>
           <Service></Service>
        </div>
    );
};

export default MyService;