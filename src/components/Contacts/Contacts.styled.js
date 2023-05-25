import styled from 'styled-components';

export const ContactsContainer = styled.div`
  min-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  gap: 20px;
  border-radius: 35px;
  background: #e0e0e0;
  box-shadow: -29px 29px 21px #aaaaaa, 29px -29px 21px #ffffff;
`;

export const Title = styled.h2`
  font-weight: 200;
`;

export const InputName = styled.input`
  outline: transparent;
  padding: 0.7em 1.7em;
  font-size: 18px;
  width: 50%;
  border: none;
  border-radius: 35px;
  background: #e0e0e0;
  box-shadow: inset 8px 8px 12px #b5b5b5, inset -8px -8px 12px #ffffff;
`;

export const ContactsItem = styled.li`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  align-items: center;
`;

export const ContactName = styled.p`
  font-size: 22px;
  font-weight: 200;
  margin-left: 20px;
`;

export const ContactPhone = styled.a`
  font-size: 22px;
  font-weight: 200;
`;

export const ButtonDelete = styled.button`
  color: #090909;
  cursor: pointer;
  max-width: 70px;
  padding: 2px 5px;
  font-size: 14px;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  border-radius: 69px;
  background: #e0e0e0;
  box-shadow: 8px 8px 16px #b5b5b5, -8px -8px 16px #ffffff;
  opacity: 0.5;

  &:hover {
    color: white;
    background: linear-gradient(145deg, #b94848, #dc5656);
    box-shadow: 8px 8px 16px #b5b5b5, -8px -8px 16px #ffffff;
    opacity: 1;
  }

  &:active {
    color: white;
    background: #e95353;
    box-shadow: inset 20px 20px 60px #c64747, inset -20px -20px 60px #ff5f5f;
  }
`;
