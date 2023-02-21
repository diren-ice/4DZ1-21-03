import classes from './block.module.css'

const Block = (props) => {
    const tasks = ['Info', 'Traditions', 'Countries', 'Sport', 'About us', 'Travel']
      const {title, children} = props
    return (
        <div className={classes.block}>
            <div>
                {tasks.map((el, id) => <li key={id}>
                    {el}
                </li>)}
            </div>
        </div>
    )
}