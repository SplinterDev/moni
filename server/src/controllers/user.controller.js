import User from "../models/user.model";

class UserController {

  async list(req, res) {
    try {

      const users = await User.find();
      res.status(200).json(users);

    } catch (err) {

      console.error(`Error ${err.kind}: ${err.message}`);
      res.status(500).send('Server Error');

    }
  }

  async create(req, res) {
    try {

      const obj = new User(req.body);
      await obj.save();
      res.status(201).json(obj);

    } catch (err) {

      console.error(`Error ${err.kind}: ${err.message}`);
      res.status(500).send('Server Error');

    }
  }

  async get(req, res) {
    try {

      const user = await User.findById(req.params.id);

      if (!user) {
        res.status(404).json({ msg: 'User not found' });
      } else {
        res.status(200).json(user);
      }

    } catch (err) {

      console.error(`Error ${err.kind}: ${err.message}`);
      res.status(500).send('Server Error');

    }
  }

  async remove(req, res) {
    try {

      const filter = { _id: req.params.id };
      const user = await User.findOneAndDelete(filter);

      if (!user) {
        res.status(404).json({ msg: 'User not found' });
      } else {
        res.status(200).json({ msg: 'User deleted' });
      }

    } catch (err) {

      console.error(`Error ${err.kind}: ${err.message}`);
      res.status(500).send('Server Error');

    }
  }

  async update(req, res) {
    try {

      const filter = { _id: req.params.id };
      const user = await User.findOneAndUpdate(filter, req.body);

      if (!user) {
        res.status(404).json({ msg: 'User not found' });
      } else {
        res.status(200).json({ msg: 'User updated' });
      }

    } catch (err) {

      console.error(`Error ${err.kind}: ${err.message}`);
      res.status(500).send('Server Error');

    }
  }
}

export default new UserController();