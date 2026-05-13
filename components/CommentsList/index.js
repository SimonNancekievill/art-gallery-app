import {
  CommentsSection,
  CommentsHeading,
  CommentItem,
  CommentText,
  CommentMeta,
  CommentsUL,
} from "./CommentsList.styled";
export default function CommentsList({ comments }) {
  if (!comments) {
    return "";
  }
  return (
    <CommentsSection aria-label="Comments Section">
      <CommentsHeading>Comments:</CommentsHeading>
      <CommentsUL>
        {comments.map((comment) => {
          const timestamp = new Date(comment.timestamp);
          const fullDate = `${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getFullYear()}`;
          const fullTime = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
          return (
            <CommentItem key={comment.id}>
              <CommentText>{comment.content}</CommentText>
              <CommentMeta>
                {fullDate}, {fullTime}
              </CommentMeta>
            </CommentItem>
          );
        })}
      </CommentsUL>
    </CommentsSection>
  );
}
