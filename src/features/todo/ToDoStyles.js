export default {
  body: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%'
  },
  wrapper: {
    display: 'flex',
    maxWidth: '600px',
    margin: 'auto',
    height: '100%',
    padding: '50px',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  app: {
    backgroundColor: '#fff',
    boxShadow:
      '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)'
  },
  todoInput: {
    width: '100%',
    background: 'rgba(0, 0, 0, 0.003)',
    boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
    padding: '16px 16px 16px 16px',
    border: 0
  },
  todoItem: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '1.4rem',
    borderTop: '1px solid #eee',
    padding: '20px 10px'
  },
  todoItemCheckBox: {
    marginRight: '10px'
  },
  todoItemDelete: {
    cursor: 'pointer',
    marginLeft: '10px',
    color: 'red',
    border: 0
  },
  footer: {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #eee'
    },
    itemsLeft: {
      padding: '0 15px'
    }
  },
  footerFilters: {
    container: {
      display: 'flex'
    },
    button: {
      cursor: 'pointer',
      border: '1px solid #eee',
      margin: '10px 5px'
    }
  }
}
