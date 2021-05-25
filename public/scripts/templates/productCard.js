export const renderProductCard = (product) => {
    const { name, category, price, image_url,description,user_name,contact } = product;
    return `<div class="col-md-4 mt-2">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-img-actions"><img
                                        src="${image_url}"
                                        class="card-img img-fluid" alt="${name}"></div>
                        </div>
                        <div class="card-body bg-light" style="text-align: left;">
                            <div class="mb-2">
                                <h4 class="font-weight-semibold mb-2"><a href="#" class="text-default mb-2"
                                                                         data-abc="true">${name}
                                        </a></h6> <a href="#" class="text-muted" data-abc="true">${category}
                                    </a>
                                </h4>
                            </div>
                            <h6 class="mb-0 font-weight-semibold">Item Cost: Rs ${price}</h6>
                            <h6 class="mb-0 font-weight-semibold">Seller Name: ${user_name}</h6>
                            <h6 class="mb-0 font-weight-semibold"> Description : ${description}</h6>
                            <h6 class="mb-0 font-weight-semibold">Contact Details: ${contact}</h6>

                            
                        </div>
                    </div>
                </div>`;
};
