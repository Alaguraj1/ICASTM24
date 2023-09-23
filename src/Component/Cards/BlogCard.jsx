import ProtoTypes from "prop-types";

function BlogCard({ blog, className }) {
  const { img, title,name,roll } = blog;
  return (
    <div className={className ? className : "col-lg-4 col-md-6"}>
      <div className="post-item-1">
        <img src={img} alt="" />
        <div className="b-post-details">
          <h3 className="commite_title">
            {title}
          </h3>
          <h6 className="commite_name">{name}</h6>
          <p dangerouslySetInnerHTML={{__html:roll}} className="commite_roll"></p>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: ProtoTypes.object,
  className: ProtoTypes.string,
};

export default BlogCard;
