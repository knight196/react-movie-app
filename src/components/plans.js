import React from 'react'

export default function plans() {
  return (      
      <div className="pricing">
        <div className="row w-100 row-cols-1 row-cols-md-3 text-center">
  
          <div className="col w-100">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <i className="bi bi-crown"></i>
                <h1 className="card-title pricing-card-title">£0.00<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li><i className="bi bi-check"></i> Stream on 1 Device at a time</li>
                    <li><i className="bi bi-check"></i> Umlimited access to library</li>
                    <li><i className="bi bi-check"></i> New video one hour after Japan</li>
                    <li><i className="bi bi-x-circle"></i> No Ad</li>
                    <li><i className="bi bi-x-circle"></i> Offline Viewing</li>
                  <li><i className="bi bi-x-circle"></i> 16% discount on Monthly Plan (billed every 12 months)</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
              </div>
            </div>
          </div>
  
          <div className="col w-100">
            <div className="card mb-4 rounded-3 shadow-sm pro">
                <h4>Most Popular</h4>
                <div className="card-header py-3 text-white bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Pro</h4>
                </div>
              <div className="card-body">
                <i className="bi bi-crown"></i>
                <h1 className="card-title pricing-card-title">£7.99<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li><i className="bi bi-check"></i> No Ad</li>
                    <li><i className="bi bi-check"></i> Offline Viewing</li>
                    <li><i className="bi bi-check"></i> Stream on 4 devices at a time</li>
                    <li><i className="bi bi-check"></i> New video one hour after Japan</li>
                    <li><i className="bi bi-check"></i> Unlimited Access to library</li>
                    <li><i className="bi bi-x-circle"></i> 16% discount on Monthly Plan (billed every 12 months)</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
              </div>
            </div>
          </div>
  
          <div className="col w-100">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <i className="bi bi-crown"></i>
                <h1 className="card-title pricing-card-title">£79<small className="text-muted fw-light">/yr</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    <li><i className="bi bi-check"></i> No Ad</li>
                    <li><i className="bi bi-check"></i> Offline Viewing</li>
                    <li><i className="bi bi-check"></i> Stream on 4 devices at a time</li>
                    <li><i className="bi bi-check"></i> New video one hour after Japan</li>
                    <li><i className="bi bi-check"></i> Unlimited Access to library</li>
                    <li><i className="bi bi-check"></i> 16% discount on Monthly Plan (billed every 12-months)</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>

            </div>
  )
}
