import React, { useState, useRef } from 'react'

const faqs = [
  {
    id: 1,
    header: "What is StreamVibe?",
    text: `StreamVibe is a streaming service that allows you to watch movies and shows on demand.StreamVibe is a streaming service that allows you to watch movies and shows on demand.`
  },
  {
    id: 2,
    header: "How much does StreamVibe cost?",
    text: `It depends on what your have chosen plan `
  },
  {
    id: 3,
    header: "What content is available on StreamVibe?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
  },
  {
    id: 4,
    header: "What is the StreamVibe free trial?",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
  },
  {
    id: 5,
    header: "How do I contact StreamVibe customer support?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
  },
  {
    id: 6,
    header: "What are the StreamVibe payment methods?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
  }
]

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
          <h5 className="rc-accordion-title">{header}</h5>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
        active === id
          ? { height: contentEl.current.scrollHeight }
          : { height: "0px" }
      }>
        <div className="rc-accordion-body">
          <p className='mb-0'>{text}</p>
        </div>
      </div>
    </div>
  )
}

const Faq = () => {

  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  }

  return (
    <>
      <div className="container-fluid px-5 mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-12 mt-2">
            <div className="card">
              <div className="card-body">
                {faqs.map((faq, index) => {
                  return (
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq