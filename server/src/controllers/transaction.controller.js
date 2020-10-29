import Transaction from "../models/transaction.model";

class TransactionController {

  // async list(req, res) {
  //   try {

  //     const transactions = await Transaction.find();
  //     res.status(200).json(transactions);

  //   } catch (err) {

  //     console.error(`Error ${err.kind}: ${err.message}`);
  //     res.status(500).json({'message': 'Server Error'});

  //   }
  // }

  // async create(req, res) {
  //   try {

  //     const obj = new Transaction(req.body);
  //     await obj.save();
  //     res.status(201).json(obj);

  //   } catch (err) {

  //     console.error(`Error ${err.kind}: ${err.message}`);
  //     res.status(500).json({'message': 'Server Error'});

  //   }
  // }

  // async get(req, res) {
  //   try {

  //     const transaction = await Transaction.find({name: req.params.name});

  //     if (!transaction) {
  //       res.status(404).json({ msg: 'Transaction not found' });
  //     } else {
  //       res.status(200).json(transaction);
  //     }

  //   } catch (err) {

  //     console.error(`Error ${err.kind}: ${err.message}`);
  //     res.status(500).json({'message': 'Server Error'});

  //   }
  // }

  // async remove(req, res) {
  //   try {

  //     const filter = { name: req.params.name };
  //     const transaction = await Transaction.findOneAndDelete(filter);

  //     if (!transaction) {
  //       res.status(404).json({ msg: 'Transaction not found' });
  //     } else {
  //       res.status(200).json({ msg: 'Transaction deleted' });
  //     }

  //   } catch (err) {

  //     console.error(`Error ${err.kind}: ${err.message}`);
  //     res.status(500).json({'message': 'Server Error'});

  //   }
  // }

  // async update(req, res) {
  //   try {

  //     const filter = { name: req.params.name };
  //     const transaction = await Transaction.findOneAndUpdate(filter, req.body);

  //     if (!transaction) {
  //       res.status(404).json({ msg: 'Transaction not found' });
  //     } else {
  //       res.status(200).json({ msg: 'Transaction updated' });
  //     }

  //   } catch (err) {

  //     console.error(`Error ${err.kind}: ${err.message}`);
  //     res.status(500).json({'message': 'Server Error'});

  //   }
  // }
}

export default new TransactionController();