import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useOnClickOutside, useOnKeyEvent } from 'hooks';
import { BaseModal } from './BaseModal';

/**
 * Usage:
 * <Modal.Modal>
 *   <Modal.Title>Hello</Modal.Title>
 *   <Modal.Body>I am a modal.</Modal.Body>
 *   <Modal.Actions><button>Click me!!</button></Modal.Actions>
 * </Modal.Modal>
 *
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  closeOnClickOutside = true,
  focusOnOpenRef = null
}) => {
  const onClickOutsideHandler = () => {
    if (closeOnClickOutside) {
      onClose();
    }
  };
  const onClickOutsideNode = useOnClickOutside(onClickOutsideHandler, isOpen);
  useOnKeyEvent('Escape', 'keyup', onClose, isOpen);

  // Focus first input on modal open: accessibility best practice
  useEffect(() => {
    if (isOpen && focusOnOpenRef) {
      focusOnOpenRef.current.focus();
    }
  }, [isOpen, focusOnOpenRef]);

  if (!isOpen) {
    return null;
  }

  return (
    <BaseModal isOpen={isOpen}>
      <Layout ref={onClickOutsideNode}>
        <Cancel onClick={onClose}>x</Cancel>
        <UpperRule />
        <LowerRule />
        {children}
      </Layout>
    </BaseModal>
  );
};

const Layout = styled.div`
  display: grid;
  grid-template-columns: 30px auto 30px 30px;
  grid-template-rows: 60px 2px auto 2px minmax(112px, auto);

  height: 100%;

  font-size: 17px;
  color: #444444;
`;

const Title = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;

  display: flex;
  align-items: center;
`;

const Cancel = styled.div`
  grid-column: 3 / span 2;
  grid-row: 1 / span 1;

  color: #999999;

  border-left: 1px solid #d8d8d8;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const UpperRule = styled.hr`
  grid-row: 2 / span 1;
  grid-column: 1/-1;

  border-top: 1px solid #d8d8d8;
`;

const Body = styled.div`
  grid-column: 2 / span 2;
  grid-row: 3 / span 1;
  min-width: 0;

  padding-top: 2.353em;
  padding-bottom: 2.353em;
`;

const LowerRule = styled(UpperRule)`
  grid-row: 4 / span 1;
`;

const Actions = styled.div`
  grid-column: 2 / span 2;
  grid-row: 5 / span 1;

  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

export { Modal, Title, Body, Actions };
