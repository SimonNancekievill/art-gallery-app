import styled from "styled-components";

export const CommentsSection = styled.section`
  padding: 0 24px 100px;
`;

export const CommentsHeading = styled.h3`
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #666;
  margin: 0 0 16px;
`;
export const CommentsUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CommentItem = styled.li`
  background: white;
  border-radius: 8px;
  padding: 14px 16px;
`;

export const CommentText = styled.blockquote`
  font-family: Raleway, sans-serif;
  font-size: 0.95rem;
  margin: 0 0 6px;
  font-style: italic;
  color: #1d1d1f;
`;

export const CommentMeta = styled.span`
  font-size: 0.75rem;
  color: #999;
  font-family: Raleway, sans-serif;
`;
