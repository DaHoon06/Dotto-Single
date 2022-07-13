
export const Status = (props: any) => {
  return (
    <article>
      {props.isLogin ?
        <section>
          <button>Logout</button>
        </section>
        :
        <section>
          <button>Login</button>
        </section>
      }
    </article>
  );
}