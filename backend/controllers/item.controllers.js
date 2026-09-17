// import Item from "../models/item.model.js";
// import Shop from "../models/shop.model.js";
// import uploadOnCloudinary from "../utils/cloudinary.js";

// export const addItem = async (req, res) => {
//   try {
//     const { name, category, foodType, price } = req.body
//     let image;
//     if (req.file) {
//       image = await uploadOnCloudinary(req.file.path)
//     }
//     const shop = await Shop.findOne({ owner: req.userId })
//     if (!shop) {
//       return res.status(400).json({ message: "shop not found" })
//     }
//     const item = await Item.create({
//       name, category, foodType, price, image, shop: shop._id
//     })

//     shop.items.push(item._id)
//     await shop.save()
//     await shop.populate("owner")
//     await shop.populate({
//       path: "items",
//       options: { sort: { updatedAt: -1 } }
//     })
//     return res.status(201).json(shop)

//   } catch (error) {
//     return res.status(500).json({ message: `add item error ${error}` })
//   }
// }

// export const editItem = async (req, res) => {
//   try {
//     const itemId = req.params.itemId
//     const { name, category, foodType, price } = req.body
//     let image;
//     if (req.file) {
//       image = await uploadOnCloudinary(req.file.path)
//     }
//     const item = await Item.findByIdAndUpdate(itemId, {
//       name, category, foodType, price, image
//     }, { new: true })
//     if (!item) {
//       return res.status(400).json({ message: "item not found" })
//     }
//     const shop = await Shop.findOne({ owner: req.userId }).populate({
//       path: "items",
//       options: { sort: { updatedAt: -1 } }
//     })
//     return res.status(200).json(shop)

//   } catch (error) {
//     return res.status(500).json({ message: `edit item error ${error}` })
//   }
// }

// export const getItemById = async (req, res) => {
//   try {
//     const itemId = req.params.itemId
//     const item = await Item.findById(itemId)
//     if (!item) {
//       return res.status(400).json({ message: "item not found" })
//     }
//     return res.status(200).json(item)
//   } catch (error) {
//     return res.status(500).json({ message: `get item error ${error}` })
//   }
// }

// export const deleteItem = async (req, res) => {
//   try {
//     const itemId = req.params.itemId
//     const item = await Item.findByIdAndDelete(itemId)
//     if (!item) {
//       return res.status(400).json({ message: "item not found" })
//     }
//     const shop = await Shop.findOne({ owner: req.userId })
//     shop.items = shop.items.filter(i => i !== item._id)
//     await shop.save()
//     await shop.populate({
//       path: "items",
//       options: { sort: { updatedAt: -1 } }
//     })
//     return res.status(200).json(shop)

//   } catch (error) {
//     return res.status(500).json({ message: `delete item error ${error}` })
//   }
// }

// export const getItemByCity = async (req, res) => {
//   try {
//     const { city } = req.params
//     if (!city) {
//       return res.status(400).json({ message: "city is required" })
//     }
//     const shops = await Shop.find({
//       city: { $regex: new RegExp(`^${city}$`, "i") }
//     }).populate('items')
//     if (!shops) {
//       return res.status(400).json({ message: 'shops not found' })
//     }
//     const shopIds = shops.map((shop) => shop._id)

//     const items = await Item.find({ shop: { $in: shopIds } })
//     return res.status(200).json(items)

//   } catch (error) {
//     return res.status(500).json({ message: `get item by city error ${error}` })
//   }
// }

// export const getItemByShop = async (req, res) => {
//   try {
//     const {shopId}=req.params
//     const shop=await Shop.findById(shopId).populate("items")
//     if (!shop) {
//       return res.status(400).json({message:"shop not found"})
//     }
//     return res.status(200).json({
//       shop,items:shop.items
//     })
//   } catch (error) {
//     return res.status(500).json({message: `get item by shop error ${error}`})
//   }
// }

// export const searchItems = async (req, res) => {
//   try {
//     const {query,city}=req.query
//     if (!query || !city) {
//       return null
//     }
//     const shops = await Shop.find({
//       city : {$regex : new RegExp(`^${city}$`, "i")}
//     }).populate('items')
//     if (!shops) {
//       return res.status(400).json({ message: 'shops not found' })
//     }
//     const shopIds=shops.map(s=>s._id)
//     const items=await Item.find({
//       shop:{$in:shopIds},
//       $or:[
//         {name:{$regex:query,$options:"i"}},
//         {category:{$regex:query,$options:"i"}}
//       ]

//     }).populate("shop","name image")

//     return res.status(200).json(items)

//   } catch (error) {
//     return res.status(500).json({message: `search item error ${error}`})
//   }
// }


// export const rating = async (req,res) => {
//   try {
//     const {itemId,rating}=req.body

//     if (!itemId || !rating) {
//       return res.status(400).json({ message: 'itemId and rating is required' })
//     }

//     if (rating<1 || rating>5) {
//       return res.status(400).json({ message: 'rating must be between 1 to 5' })
//     }

//     const item=await Item.findById(itemId)
//     if (!item) {
//       return res.status(400).json({ message: 'item not found' })
//     }

//     const newCount=item.rating.count + 1
//     const newAverge=(item.rating.average*item.rating.count + rating)/newCount

//     item.rating.count=newCount
//     item.rating.average=newAverge
//     await item.save()
//     return res.status(200).json({rating:item.rating})

//   } catch (error) {
//     return res.status(500).json({message: `rating error ${error}`})
//   }
// }












import Item from "../models/item.model.js";
import Shop from "../models/shop.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

export const addItem = async (req, res) => {
  try {
    const { name, category, foodType, price } = req.body;

    let image;

    if (req.file) {
      image = await uploadOnCloudinary(req.file.path);
    }

    const shop = await Shop.findOne({
      owner: req.userId
    });

    if (!shop) {
      return res.status(400).json({
        message: "shop not found"
      });
    }

    const item = await Item.create({
      name,
      category,
      foodType,
      price,
      image,
      shop: shop._id
    });

    shop.items.push(item._id);
    await shop.save();

    await shop.populate("owner");

    await shop.populate({
      path: "items",
      options: { sort: { updatedAt: -1 } }
    });

    return res.status(201).json(shop);

  } catch (error) {
    return res.status(500).json({
      message: `add item error ${error}`
    });
  }
};

export const editItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const { name, category, foodType, price } = req.body;

    let image;

    if (req.file) {
      image = await uploadOnCloudinary(req.file.path);
    }

    const item = await Item.findByIdAndUpdate(
      itemId,
      {
        name,
        category,
        foodType,
        price,
        image
      },
      { new: true }
    );

    if (!item) {
      return res.status(400).json({
        message: "item not found"
      });
    }

    const shop = await Shop.findOne({
      owner: req.userId
    }).populate({
      path: "items",
      options: { sort: { updatedAt: -1 } }
    });

    return res.status(200).json(shop);

  } catch (error) {
    return res.status(500).json({
      message: `edit item error ${error}`
    });
  }
};

export const getItemById = async (req, res) => {
  try {
    const itemId = req.params.itemId;

    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(400).json({
        message: "item not found"
      });
    }

    return res.status(200).json(item);

  } catch (error) {
    return res.status(500).json({
      message: `get item error ${error}`
    });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;

    const item = await Item.findByIdAndDelete(itemId);

    if (!item) {
      return res.status(400).json({
        message: "item not found"
      });
    }

    const shop = await Shop.findOne({
      owner: req.userId
    });

    if (shop) {
      shop.items = shop.items.filter(
        i => i.toString() !== item._id.toString()
      );

      await shop.save();

      await shop.populate({
        path: "items",
        options: { sort: { updatedAt: -1 } }
      });
    }

    return res.status(200).json(shop);

  } catch (error) {
    return res.status(500).json({
      message: `delete item error ${error}`
    });
  }
};

export const getItemByCity = async (req, res) => {
  try {
    const { city } = req.params;

    if (!city) {
      return res.status(400).json({
        message: "city is required"
      });
    }

    // First find shops in the requested city
    let shops = await Shop.find({
      city: {
        $regex: new RegExp(`^${city}$`, "i")
      }
    });

    // If no city shops, fallback to all India shops
    if (shops.length === 0) {
      shops = await Shop.find({});
    }

    const shopIds = shops.map(shop => shop._id);

    // If there are no shops anywhere
    if (shopIds.length === 0) {
      return res.status(200).json([]);
    }

    const items = await Item.find({
      shop: {
        $in: shopIds
      }
    }).populate("shop", "name image city state");

    return res.status(200).json(items);

  } catch (error) {
    return res.status(500).json({
      message: `get item by city error ${error}`
    });
  }
};

export const getItemByShop = async (req, res) => {
  try {
    const { shopId } = req.params;

    const shop = await Shop.findById(shopId)
      .populate("items");

    if (!shop) {
      return res.status(400).json({
        message: "shop not found"
      });
    }

    return res.status(200).json({
      shop,
      items: shop.items
    });

  } catch (error) {
    return res.status(500).json({
      message: `get item by shop error ${error}`
    });
  }
};

export const searchItems = async (req, res) => {
  try {
    const { query, city } = req.query;

    if (!query) {
      return res.status(400).json({
        message: "search query is required"
      });
    }

    let shops;

    // If city is provided, first search that city
    if (city) {
      shops = await Shop.find({
        city: {
          $regex: new RegExp(`^${city}$`, "i")
        }
      });

      // Fallback to India-wide shops
      if (shops.length === 0) {
        shops = await Shop.find({});
      }
    } else {
      // No city supplied = India-wide search
      shops = await Shop.find({});
    }

    const shopIds = shops.map(shop => shop._id);

    if (shopIds.length === 0) {
      return res.status(200).json([]);
    }

    const items = await Item.find({
      shop: {
        $in: shopIds
      },
      $or: [
        {
          name: {
            $regex: query,
            $options: "i"
          }
        },
        {
          category: {
            $regex: query,
            $options: "i"
          }
        }
      ]
    }).populate("shop", "name image city state");

    return res.status(200).json(items);

  } catch (error) {
    return res.status(500).json({
      message: `search item error ${error}`
    });
  }
};

export const rating = async (req, res) => {
  try {
    const { itemId, rating } = req.body;

    if (!itemId || !rating) {
      return res.status(400).json({
        message: "itemId and rating is required"
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        message: "rating must be between 1 to 5"
      });
    }

    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(400).json({
        message: "item not found"
      });
    }

    const newCount = item.rating.count + 1;

    const newAverage =
      (item.rating.average * item.rating.count + rating) /
      newCount;

    item.rating.count = newCount;
    item.rating.average = newAverage;

    await item.save();

    return res.status(200).json({
      rating: item.rating
    });

  } catch (error) {
    return res.status(500).json({
      message: `rating error ${error}`
    });
  }
};