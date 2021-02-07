import React from 'react'
function BreadCrumb(props) {
    const breadcrumb = props.breadcrumb;
	return (
		<>
        <section className="bdc">
            {breadcrumb.map((bl,index)=>
                <p className="bdc__item"><a href={bl.link} className="bdc__item__link">{bl.text}</a><img src="/chevron__right.svg" className="bdc__item__img"/></p>
            )}
        </section>
        <style jsx>
            {
                    `
                    .bdc{display:flex;align-items:center;padding: 0 24px 30px;}
                    .bdc__item{display: flex; align-items: center;}
                    .bdc__item__link{color: #909090;font-size: 14px; font-weight: 400;text-decoration:none;}
                    .bdc__item__img{width:13px;}
                    `
            }
        </style>
        </>
	);
}

export default BreadCrumb;
