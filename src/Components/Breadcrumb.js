import React from 'react';

const Breadcrumb = ({title, name}) => {
  return (
    <>
    <div class="breadcrumbs">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="breadcrumbs-content">
                        <h1 class="page-title">{title}</h1>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-nav">
                        <li><a href="/">Home</a></li>
                        <li>{name}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Breadcrumb;
